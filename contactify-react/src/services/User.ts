import { HandlerFnsFromRootSpec } from 'oas-to-ts'
import { Spec } from '../interfaces/openapiSpecs'
import { AuthRequestDTO } from '../interfaces/index'

type HandlerFns<Context> = HandlerFnsFromRootSpec<Spec, Context>
export const userHandlers: Pick<HandlerFns<{}>,
  '/user/login'
  | '/user/register'
  | '/user/ping'> = {
  '/user/login': {
    post: async (ctx: AuthRequestDTO) => {
      const response = await fetch('/user/login', {
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
  },
  '/user/ping': {
    get: async () => {
      const response = await fetch('/user/ping')
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
      const response = await fetch('/user/login', {
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