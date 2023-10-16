/* eslint-disable */
export interface Spec {
  readonly paths: {
    readonly "/contact": {
      readonly get: {
        readonly parameters: {
          readonly path: {
          };
          readonly query: {
            readonly search: string
          };
          readonly header: {
          };
          readonly cookie: {
          };
        }
        readonly responses: {
        }
      }
      readonly post: {
        readonly parameters: {
          readonly path: {
          };
          readonly query: {
          };
          readonly header: {
          };
          readonly cookie: {
          };
        }
          readonly "requestBody": {
                        readonly content: {
              readonly "application/json": Spec["components"]["schemas"]["Contact"]
            }
          }
        readonly responses: {
          readonly "200": {
            readonly content: {
              readonly "application/json": Spec["components"]["schemas"]["Contact"]
            }
          }
        }
      }
    }
    readonly "/contact/{id}": {
      readonly put: {
        readonly parameters: {
          readonly path: {
            readonly id: number
          };
          readonly query: {
          };
          readonly header: {
          };
          readonly cookie: {
          };
        }
          readonly "requestBody": {
                        readonly content: {
              readonly "application/json": Spec["components"]["schemas"]["Contact"]
            }
          }
        readonly responses: {
          readonly "200": {
            readonly content: {
              readonly "application/json": Spec["components"]["schemas"]["Contact"]
            }
          }
        }
      }
      readonly delete: {
        readonly parameters: {
          readonly path: {
            readonly id: number
          };
          readonly query: {
          };
          readonly header: {
          };
          readonly cookie: {
          };
        }
          readonly "requestBody": {
                        readonly content: {
              readonly "application/json": Spec["components"]["schemas"]["Contact"]
            }
          }
        readonly responses: {
          readonly "200": {
            readonly content: {
              readonly "application/json": Spec["components"]["schemas"]["Contact"]
            }
          }
        }
      }
    }
    readonly "/user/login": {
      readonly post: {
        readonly parameters: {
          readonly path: {
          };
          readonly query: {
          };
          readonly header: {
          };
          readonly cookie: {
          };
        }
          readonly "requestBody": {
                        readonly content: {
              readonly "application/json": Spec["components"]["schemas"]["AuthRequestDTO"]
            }
          }
        readonly responses: {
          readonly "200": {
            readonly content: {
              readonly "application/json": Spec["components"]["schemas"]["AuthResponseDTO"]
            }
          }
        }
      }
    }
    readonly "/user/ping": {
      readonly get: {
        readonly parameters: {
          readonly path: {
          };
          readonly query: {
          };
          readonly header: {
          };
          readonly cookie: {
          };
        }
        readonly responses: {
          readonly "200": {
            readonly content: {
              readonly "text/plain": string
            }
          }
        }
      }
    }
    readonly "/user/register": {
      readonly post: {
        readonly parameters: {
          readonly path: {
          };
          readonly query: {
          };
          readonly header: {
          };
          readonly cookie: {
          };
        }
          readonly "requestBody": {
                        readonly content: {
              readonly "application/json": Spec["components"]["schemas"]["Account"]
            }
          }
        readonly responses: {
          readonly "200": {
            readonly content: {
              readonly "application/json": Spec["components"]["schemas"]["Account"]
            }
          }
        }
      }
    }
  }
  readonly components: {
    readonly schemas: {
      readonly Account: ({ readonly "id"?: number;
readonly "username"?: string;
readonly "password"?: string;
readonly "roles"?: (Spec["components"]["schemas"]["AccountRole"])[];
 })
      readonly AccountRole: ({ readonly "id"?: number;
readonly "accounts"?: (Spec["components"]["schemas"]["Account"])[];
readonly "role"?: string;
 })
      readonly AuthRequestDTO: ({ readonly "username"?: string;
readonly "password"?: string;
 })
      readonly AuthResponseDTO: ({ readonly "username"?: string;
readonly "authToken"?: string;
 })
      readonly Contact: ({ readonly "id"?: number;
readonly "firstName"?: string;
readonly "lastName"?: string;
readonly "phoneNumber"?: string;
readonly "email"?: string;
 })
    }
  }
}

