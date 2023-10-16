import { Spec } from './openapiSpecs'

export interface User {
  id?: number
  username: string
  password: string
  authToken?: string
}

let spec: Spec
export type Contact = typeof spec.components.schemas.Contact
export type Account = typeof spec.components.schemas.Account
export type AccountRole = typeof spec.components.schemas.AccountRole
export type AuthRequestDTO = typeof spec.components.schemas.AuthRequestDTO
export type AuthResponseDTO = typeof spec.components.schemas.AuthResponseDTO