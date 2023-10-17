import { HandlerFnsFromRootSpec } from 'oas-to-ts'
import { Spec } from '../interfaces/openapiSpecs'
import { Contact } from '../interfaces/index'
const API_URL = process.env.REACT_APP_API_URL
const token = JSON.parse(localStorage.getItem('user') || '{}').authToken

type HandlerFns<Context> = HandlerFnsFromRootSpec<Spec, Context>
export const contactHandlers: Pick<HandlerFns<{}>, '/contact' | '/contact/{id}'> = {
  '/contact': {
    get: async () => {
      const response = await fetch(API_URL + '/contact', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      return response
        .json()
        .then((content: Contact[]) => ({
          httpCode: 'default',
          contentType: 'application/json',
          content,
        }))
        .catch((e) => {
          return {
            httpCode: 'error',
            contentType: 'application/json',
            content: [] as Contact[],
          } as any
        })
    },
    post: async (ctx: Contact) => {
      const response = await fetch(API_URL + '/contact', {
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
      const response = await fetch(API_URL + '/contact/' + ctx.id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
          'Authorization': `Bearer ${token}`
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
      const response = await fetch(API_URL + '/contact/' + ctx.id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
          'Authorization': `Bearer ${token}`
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