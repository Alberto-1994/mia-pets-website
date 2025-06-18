export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const categoria = searchParams.get('categoria')
    const popular = searchParams.get('popular')
    const limit = searchParams.get('limit')

    let whereClause: any = {}

    if (categoria) {
      whereClause.categoria = categoria
    }

    if (popular === 'true') {
      whereClause.popular = true
    }

    const products = await prisma.product.findMany({
      where: whereClause,
      take: limit ? parseInt(limit) : undefined,
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(products)
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json(
      { error: 'Error fetching products' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const product = await prisma.product.create({
      data: {
        nombre: body.nombre,
        precio: body.precio,
        imagen: body.imagen,
        url: body.url,
        popular: body.popular || false,
        categoria: body.categoria,
        descripcion: body.descripcion
      }
    })

    return NextResponse.json(product)
  } catch (error) {
    console.error('Error creating product:', error)
    return NextResponse.json(
      { error: 'Error creating product' },
      { status: 500 }
    )
  }
}