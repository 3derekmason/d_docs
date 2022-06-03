import {
  documents,
  document,
  createDocument,
  updateDocument,
  deleteDocument,
} from './documents'
import type { StandardScenario } from './documents.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('documents', () => {
  scenario('returns all documents', async (scenario: StandardScenario) => {
    const result = await documents()

    expect(result.length).toEqual(Object.keys(scenario.document).length)
  })

  scenario('returns a single document', async (scenario: StandardScenario) => {
    const result = await document({ id: scenario.document.one.id })

    expect(result).toEqual(scenario.document.one)
  })

  scenario('creates a document', async () => {
    const result = await createDocument({
      input: { title: 'String3451714', url: 'String' },
    })

    expect(result.title).toEqual('String3451714')
    expect(result.url).toEqual('String')
  })

  scenario('updates a document', async (scenario: StandardScenario) => {
    const original = await document({ id: scenario.document.one.id })
    const result = await updateDocument({
      id: original.id,
      input: { title: 'String74512742' },
    })

    expect(result.title).toEqual('String74512742')
  })

  scenario('deletes a document', async (scenario: StandardScenario) => {
    const original = await deleteDocument({ id: scenario.document.one.id })
    const result = await document({ id: original.id })

    expect(result).toEqual(null)
  })
})
