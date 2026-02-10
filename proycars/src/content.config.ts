import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const coches = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/data/coches' }),
  schema: z.object({
    marca: z.string(),
    modelo: z.string(),
    año: z.number().int().min(1990).max(2030),
    precio: z.number().positive(),
    kilometros: z.number().nonnegative(),
    combustible: z.enum(['Gasolina', 'Diésel', 'Híbrido', 'Eléctrico', 'GLP']),
    transmision: z.enum(['Manual', 'Automático']),
    potencia: z.number().int().positive(),
    imagenes: z.array(z.string()).min(1),
    estado: z.enum(['Nuevo', 'Seminuevo', 'Ocasión']),
    destacado: z.boolean().default(false),
    slug: z.string(),
  }),
});

export const collections = { coches };
