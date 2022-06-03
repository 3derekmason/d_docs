import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.DocumentCreateArgs>({
  document: {
    one: { data: { title: 'String2355151', url: 'String' } },
    two: { data: { title: 'String1255031', url: 'String' } },
  },
})

export type StandardScenario = typeof standard
