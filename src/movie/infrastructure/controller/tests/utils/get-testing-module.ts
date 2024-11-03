import { Test, TestingModule } from '@nestjs/testing'
import { appModuleMetadata } from '../../../../../app.module'

export async function getTestingModule(): Promise<TestingModule> {
  return await Test.createTestingModule(appModuleMetadata).compile()
}
