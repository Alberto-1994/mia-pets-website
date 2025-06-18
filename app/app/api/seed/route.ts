export const dynamic = "force-dynamic";

import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import miaPetsData from '../../../data/mia_pets_data.json'

const prisma = new PrismaClient()

export async function POST() {
  try {
    // Clear existing products
    await prisma.product.deleteMany()

    // Filter and clean the data
    const validProducts = miaPetsData
      .filter((item: any) => {
        // Filter out invalid entries
        return item.nombre && 
               item.nombre.trim() !== '' && 
               !item.nombre.includes('Calificación') &&
               item.precio !== undefined &&
               item.categoria &&
               item.categoria.trim() !== ''
      })
      .map((item: any, index: number) => ({
        nombre: item.nombre.trim(),
        precio: typeof item.precio === 'number' ? item.precio : 0,
        imagen: item.imagen || null,
        url: item.url || null,
        popular: index < 10, // Mark first 10 as popular
        categoria: item.categoria.toLowerCase().trim(),
        descripcion: item.descripcion || `Producto de calidad para ${item.categoria}`
      }))

    // Insert products in batches
    const batchSize = 100
    for (let i = 0; i < validProducts.length; i += batchSize) {
      const batch = validProducts.slice(i, i + batchSize)
      await prisma.product.createMany({
        data: batch,
        skipDuplicates: true
      })
    }

    const count = await prisma.product.count()

    return NextResponse.json({ 
      message: 'Database seeded successfully',
      productsCreated: count
    })
  } catch (error) {
    console.error('Error seeding database:', error)
    return NextResponse.json(
      { error: 'Error seeding database' },
      { status: 500 }
    )
  }
}