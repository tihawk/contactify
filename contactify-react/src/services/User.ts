import { HandlerFnsFromRootSpec } from 'oas-to-ts'
import { Spec } from '../interfaces/openapiSpecs'
import { AuthRequestDTO, AuthResponseDTO } from '../interfaces/index'
const API_URL = process.env.REACT_APP_API_URL

type HandlerFns<Context> = HandlerFnsFromRootSpec<Spec, Context>
export const userHandlers: Pick<HandlerFns<{}>,
  '/user/login'
  | '/user/register'
  | '/user/ping'> = {
  '/user/login': {
    post: async (ctx: AuthRequestDTO) => {
      const response = await fetch(API_URL + '/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
        body: JSON.stringify(ctx),
      })
        .then((res) => res.json())
        .then((content: AuthResponseDTO) => ({
          httpCode: 'default',
          contentType: 'application/json',
          content,
        } as any))
        .catch((e) => {
          return {
            httpCode: 'error',
            contentType: 'application/json',
            content: {} as AuthResponseDTO,
          } as any
        })
      return response
    },
  },
  '/user/ping': {
    get: async () => {
      const response = await fetch(API_URL + '/user/ping')
      return response
        .json()
        .then((content: String) => ({
          httpCode: 'default',
          contentType: 'application/json',
          content,
        } as never ))
        .catch((e) => {
          return {
            httpCode: 'error',
            contentType: 'application/json',
            content: '' as String,
          } as never
        })
    },
  },
  '/user/register': {
    post: async (ctx: AuthRequestDTO) => {
      const response = await fetch(API_URL + '/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
        body: JSON.stringify(ctx),
      })
        .then((res) => res.json())
        .then((content: String) => ({
          httpCode: 'default',
          contentType: 'application/json',
          content,
        } as never))
        .catch((e) => {
          return {
            httpCode: 'error',
            contentType: 'application/json',
            content: '' as String,
          } as never
        })
      return response
    },
  }
}