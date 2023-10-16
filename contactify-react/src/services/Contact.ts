import { HandlerFnsFromRootSpec } from 'oas-to-ts'
import { Spec } from '../interfaces/openapiSpecs'
import { Contact } from '../interfaces/index'

type HandlerFns<Context> = HandlerFnsFromRootSpec<Spec, Context>
export const contactHandlers: Pick<HandlerFns<{}>, '/contact' | '/contact/{id}'> = {
  '/contact': {
    get: async () => {
      const response = await fetch('/contact')
      return response
        .json()
        .then((content: Contact[]) => ({
          httpCode: 'default',
          contentType: 'application/json',
          content,
        } as never ))
        .catch((e) => {
          return {
            httpCode: 'error',
            contentType: 'application/json',
            content: [] as Contact[],
          } as never
        })
    },
    post: async (ctx: Contact) => {
      const response = await fetch('/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
        body: JSON.stringify(ctx),
      })
        .then((res) => res.json())
        .then((content: Contact) => ({
          httpCode: 'default',
          contentType: 'application/json',
          content,
        }))
        .catch((e) => {
          return {
            httpCode: 'error',
            contentType: 'application/json',
            content: {} as Contact,
          } as any
        })
      return response
    },
  },
  '/contact/{id}': {
    put: async (ctx: Contact) => {
      const response = await fetch('/contact', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
        body: JSON.stringify(ctx),
      })
        .then((res) => res.json())
        .then((content: Contact) => ({
          httpCode: 'default',
          contentType: 'application/json',
          content,
        }))
        .catch((e) => {
          return {
            httpCode: 'error',
            contentType: 'application/json',
            content: {} as Contact,
          } as any
        })
      return response
    },
    delete: async (ctx: Contact) => {
      const response = await fetch('/contact', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
        body: JSON.stringify(ctx),
      })
        .then((res) => res.json())
        .then((content: Contact) => ({
          httpCode: 'default',
          contentType: 'application/json',
          content,
        }))
        .catch((e) => {
          return {
            httpCode: 'error',
            contentType: 'application/json',
            content: {} as Contact,
          } as any
        })
      return response
    },
  },
}