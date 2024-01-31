/**
 * Unit tests for the action's entrypoint, src/index.ts
 */

import * as main from '../src/main'
import * as core from '@actions/core'

jest.mock('@actions/core')

// Mock the action's entrypoint
const runMock = jest.spyOn(main, 'run').mockImplementation()

describe('index', () => {
  it('calls run when imported', async () => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('../src/index')

    expect(runMock).toHaveBeenCalled()
  })

  it('gets HASHNODE_PUBLICATION_NAME input', () => {
    const getInputSpy = jest
      .spyOn(core, 'getInput')
      .mockImplementation(() => 'mock value')
    const mockRun = jest.spyOn(main, 'run').mockImplementation(async () => {
      core.getInput('HASHNODE_PUBLICATION_NAME')
      return Promise.resolve()
    })

    main.run()

    expect(getInputSpy).toHaveBeenCalledWith('HASHNODE_PUBLICATION_NAME')
    mockRun.mockRestore()
    getInputSpy.mockRestore()
  })
})
