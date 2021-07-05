define({ "api": [
  {
    "type": "post",
    "url": "http://localhost:3100/v1/auth",
    "title": "",
    "version": "1.0.0",
    "name": "AUTH",
    "group": "Autenticação",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>(Obrigatório)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>(Obrigatório)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body",
          "content": "{\n  \"email\": \"admin@example.com\",\n  \"password\": \"123\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "(200) Resposta",
          "content": "    HTTP/1.1 200 OK\n\n{\n  \"user\": {\n   \"id\": \"1\",\n   \"nome\": \"Eric Pereira\",\n   \"email\": \"admin@example.com\",\n   \"password_hash\": \"$2a$08$TL1ApN3/TjpikMjWNEmWROlZS3TP4KvFWxezBcl8X7oAaJ1m9iLfK\",\n   \"createdAt\": \"2021-07-04T06:38:39.270Z\",\n   \"updatedAt\": \"2021-07-04T06:38:39.270Z\"\n },\n \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJpYXQiOjE2MjUzODA5MDV9.DHyVzReYnz3EklP86XhBHYa9WtdxTr_s58wEaHWBlDA\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "404 Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"message\": \"Senha incorreta\"\n}",
          "type": "json"
        },
        {
          "title": "500 Internal",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"status\": false,\n  \"message\": \"Falha ao autenticar!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/docs/auth.js",
    "groupTitle": "Autenticação"
  },
  {
    "type": "post",
    "url": "http://localhost:3100/v1/estabelecimento/",
    "title": "2º Incluir Registro - Estabelecimento",
    "version": "1.0.0",
    "name": "Estabelecimento_ADD",
    "group": "Estabelecimento",
    "success": {
      "examples": [
        {
          "title": "201 OK",
          "content": "HTTP/1.1 201 OK\n{              \n  \"status\": true,\n  \"message\": \"Registro adicionado com sucesso!\"\n  \"data\": [\n      {\n         \"id\": 3\n         \"nome\": \"MERCADO DO VALE\"\n         \"cnpj\": \"12345000132189\"\n         \"telefone\": \"(24) 6548-3212\"\n         \"email\": \"teste@vale.com\"\n         \"cep\": \"25850-000\"\n         \"uf\": \"RJ\"\n         \"cidade\": \"PARAÍBA DO SUL\"\n         \"bairro\": \"BARÃO DE ANGRA\"\n         \"logradouro\": \"ESTR. SOUTELO SILVA\"\n         \"numero\": \"456\"\n         \"complemento\": null\n         \"createdat\": \"04/07/2021 23:11:20\"\n         \"updatedat\": \"04/07/2021 23:11:20\"\n      }\n    ]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Chave primária</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cnpj",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "telefone",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cep",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uf",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cidade",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "bairro",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "logradouro",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "numero",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "complemento",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdat",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updatedat",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "422 Unprocessable Entity",
          "content": "HTTP/1.1 422 Unprocessable Entity\n\n  {\n    \"field\": \"[Fields invalidos]..\",\n    \"message\": \"exemplo: Campo não preenchido...\" \n  }",
          "type": "json"
        },
        {
          "title": "500 Internal",
          "content": "HTTP/1.1 500 Internal Server Error\n\n  {\n    \"status\": false,\n    \"message\": \"Falha ao processar a requisição\", \n    \"error\": \"Mensagem de erro...\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/docs/estabelecimento.js",
    "groupTitle": "Estabelecimento",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>(Obrigatório) Chave primária</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..70",
            "optional": false,
            "field": "nome",
            "description": "<p>(Obrigatório)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..14",
            "optional": false,
            "field": "cnpj",
            "description": "<p>(Obrigatório)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..16",
            "optional": false,
            "field": "telefone",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..10",
            "optional": false,
            "field": "cep",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..2",
            "optional": false,
            "field": "uf",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..30",
            "optional": false,
            "field": "cidade",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..30",
            "optional": false,
            "field": "bairro",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..70",
            "optional": false,
            "field": "logradouro",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..20",
            "optional": false,
            "field": "numero",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..30",
            "optional": false,
            "field": "complemento",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..0",
            "optional": false,
            "field": "createdat",
            "description": "<p>(Obrigatório)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..0",
            "optional": false,
            "field": "updatedat",
            "description": "<p>(Obrigatório)</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "http://localhost:3100/v1/estabelecimento/:id",
    "title": "4º Remover Registro - Estabelecimento",
    "version": "1.0.0",
    "name": "Estabelecimento_Delete",
    "group": "Estabelecimento",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Chave primária</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Exemplo de uso",
        "content": "curl -X DELETE http://localhost:3100/v1/estabelecimento/:id",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 OK",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": true,\n  \"message\": \"Registro removido com sucesso!\"\n}",
          "type": "json"
        },
        {
          "title": "204 Nenhuma Alteração",
          "content": "HTTP/1.1 204 OK\n{\n  \"status\": false,\n  \"message\": \"Nenhum registro para deleta\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "500 Internal",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"message\": \"Falha ao processar a requisição\",\n  \"error\": \"Mensagem de erro...\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/docs/estabelecimento.js",
    "groupTitle": "Estabelecimento"
  },
  {
    "type": "get",
    "url": "http://localhost:3100/v1/estabelecimento/",
    "title": "1º Listar - Estabelecimento",
    "version": "1.0.0",
    "name": "Estabelecimento_LISTAR",
    "group": "Estabelecimento",
    "success": {
      "examples": [
        {
          "title": "(200)",
          "content": "HTTP/1.1 200 OK\n\n  {\n    \"status\": true,\n    \"data\": [\n      {\n         \"id\": 3\n         \"nome\": \"MERCADO DO VALE\"\n         \"cnpj\": \"12345000132189\"\n         \"telefone\": \"(24) 6548-3212\"\n         \"email\": \"teste@vale.com\"\n         \"cep\": \"25850-000\"\n         \"uf\": \"RJ\"\n         \"cidade\": \"PARAÍBA DO SUL\"\n         \"bairro\": \"BARÃO DE ANGRA\"\n         \"logradouro\": \"ESTR. SOUTELO SILVA\"\n         \"numero\": \"456\"\n         \"complemento\": null\n         \"createdat\": \"04/07/2021 23:11:20\"\n         \"updatedat\": \"04/07/2021 23:11:20\"\n      }\n    ]\n  }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Chave primária</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cnpj",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "telefone",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cep",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uf",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cidade",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "bairro",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "logradouro",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "numero",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "complemento",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdat",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updatedat",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "500 Internal",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"status\": false,\n  \"message\": \"Falha ao processar a requisição\",\n  \"error\": \"Mensagem de erro..\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/docs/estabelecimento.js",
    "groupTitle": "Estabelecimento"
  },
  {
    "type": "put",
    "url": "http://localhost:3100/v1/estabelecimento/",
    "title": "3º Atualizar Registro - Estabelecimento",
    "version": "1.0.0",
    "name": "Estabelecimento_Update",
    "group": "Estabelecimento",
    "success": {
      "examples": [
        {
          "title": "200 OK",
          "content": "HTTP/1.1 200 OK\n{              \n  \"status\": true,\n  \"message\": \"Atualizado com Sucesso\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "id",
            "description": "<p>Parâmetro não informado!</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Body",
            "description": "<p>Corpo da requisição não informado!</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n\n  {\n    \"status\": false,\n    \"message\": \"Falha ao processar a requisição\" \n  }",
          "type": "json"
        },
        {
          "title": "422 Unprocessable Entity",
          "content": "HTTP/1.1 422 Unprocessable Entity\n\n  {\n    \"field\": \"[Fields invalidos]..\",\n    \"message\": \"exemplo: Campo não preenchido...\" \n  }",
          "type": "json"
        },
        {
          "title": "500 Internal",
          "content": "HTTP/1.1 500 Internal Server Error\n\n  {\n    \"status\": false,\n    \"message\": \"Falha ao processar a requisição\", \n    \"error\": \"Mensagem de erro...\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/docs/estabelecimento.js",
    "groupTitle": "Estabelecimento",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>(Obrigatório) Chave primária</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..70",
            "optional": false,
            "field": "nome",
            "description": "<p>(Obrigatório)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..14",
            "optional": false,
            "field": "cnpj",
            "description": "<p>(Obrigatório)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..16",
            "optional": false,
            "field": "telefone",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..10",
            "optional": false,
            "field": "cep",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..2",
            "optional": false,
            "field": "uf",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..30",
            "optional": false,
            "field": "cidade",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..30",
            "optional": false,
            "field": "bairro",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..70",
            "optional": false,
            "field": "logradouro",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..20",
            "optional": false,
            "field": "numero",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..30",
            "optional": false,
            "field": "complemento",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..0",
            "optional": false,
            "field": "createdat",
            "description": "<p>(Obrigatório)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..0",
            "optional": false,
            "field": "updatedat",
            "description": "<p>(Obrigatório)</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "http://localhost:3100/v1/signup/",
    "title": "2º Incluir Registro - Usuario",
    "version": "1.0.0",
    "name": "Usuario_ADD",
    "group": "Usuario",
    "success": {
      "examples": [
        {
          "title": "201 OK",
          "content": "HTTP/1.1 201 OK\n{              \n  \"status\": true,\n  \"message\": \"Registro adicionado com sucesso!\"\n  \"data\": [\n      {\n         \"id\": 1\n         \"nome\": \"Eric Pereira\"\n         \"email\": \"admin@example.com\"\n         \"password_hash\": \"$2a$08$TL1ApN3/TjpikMjWNEmWROlZS3TP4KvFWxezBcl8X7oAaJ1m9iLfK\"\n         \"createdat\": \"04/07/2021 23:11:19\"\n         \"updatedat\": \"04/07/2021 23:11:19\"\n      }\n    ]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Chave primária</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password_hash",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdat",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updatedat",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "422 Unprocessable Entity",
          "content": "HTTP/1.1 422 Unprocessable Entity\n\n  {\n    \"field\": \"[Fields invalidos]..\",\n    \"message\": \"exemplo: Campo não preenchido...\" \n  }",
          "type": "json"
        },
        {
          "title": "500 Internal",
          "content": "HTTP/1.1 500 Internal Server Error\n\n  {\n    \"status\": false,\n    \"message\": \"Falha ao processar a requisição\", \n    \"error\": \"Mensagem de erro...\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/docs/usuario.js",
    "groupTitle": "Usuario",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>(Obrigatório) Chave primária</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..70",
            "optional": false,
            "field": "nome",
            "description": "<p>(Obrigatório)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "email",
            "description": "<p>(Obrigatório)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..255",
            "optional": false,
            "field": "password_hash",
            "description": "<p>(Obrigatório)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..0",
            "optional": false,
            "field": "createdat",
            "description": "<p>(Obrigatório)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..0",
            "optional": false,
            "field": "updatedat",
            "description": "<p>(Obrigatório)</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "http://161.35.227.175:6900/v1/usuario/delete",
    "title": "4º Remover Registro - Usuario",
    "version": "1.0.0",
    "name": "Usuario_Delete",
    "group": "Usuario",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Chave primária</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "where Body",
          "content": "{\n  \"where\": {\"id\": 1}\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Exemplo de uso",
        "content": "curl -X DELETE http://161.35.227.175:6900/v1/usuario/",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "201 OK",
          "content": "HTTP/1.1 201 OK\n{\n  \"status\": true,\n  \"message\": \"Registro removido com sucesso!\"\n}",
          "type": "json"
        },
        {
          "title": "204 Nenhuma Alteração",
          "content": "HTTP/1.1 204 OK\n{\n  \"status\": false,\n  \"message\": \"Nenhum registro para deleta\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "500 Internal",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"message\": \"Falha ao processar Requisição\",\n  \"error\": \"Mensagem de erro...\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/docs/usuario.js",
    "groupTitle": "Usuario"
  },
  {
    "type": "get",
    "url": "http://localhost:3100/v1/usuario/",
    "title": "1º Listar - Usuario",
    "version": "1.0.0",
    "name": "Usuario_LISTAR",
    "group": "Usuario",
    "success": {
      "examples": [
        {
          "title": "(200)",
          "content": "HTTP/1.1 200 OK\n\n  {\n    \"status\": true,\n    \"data\": [\n      {\n         \"id\": 1\n         \"nome\": \"Eric Pereira\"\n         \"email\": \"admin@example.com\"\n         \"password_hash\": \"$2a$08$TL1ApN3/TjpikMjWNEmWROlZS3TP4KvFWxezBcl8X7oAaJ1m9iLfK\"\n         \"createdat\": \"04/07/2021 23:11:19\"\n         \"updatedat\": \"04/07/2021 23:11:19\"\n      }\n    ]\n  }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Chave primária</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password_hash",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdat",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updatedat",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "500 Internal",
          "content": "HTTP/1.1 500 Internal Server Error\n\n  {\n    \"status\": false,\n    \"message\": \"Falha ao processar a requisição\",\n    \"error\": \"Mensagem de erro..\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/docs/usuario.js",
    "groupTitle": "Usuario"
  },
  {
    "type": "put",
    "url": "http://localhost:3100/v1/usuario/",
    "title": "3º Atualizar Registro - Usuario",
    "version": "1.0.0",
    "name": "Usuario_Update",
    "group": "Usuario",
    "success": {
      "examples": [
        {
          "title": "200 OK",
          "content": "HTTP/1.1 200 OK\n{              \n  \"status\": true,\n  \"message\": \"Atualizado com Sucesso\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "id",
            "description": "<p>Parâmetro não informado!</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Body",
            "description": "<p>Corpo da requisição não informado!</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n\n  {\n    \"status\": false,\n    \"message\": \"Falha ao processar a requisição\" \n  }",
          "type": "json"
        },
        {
          "title": "422 Unprocessable Entity",
          "content": "HTTP/1.1 422 Unprocessable Entity\n\n  {\n    \"field\": \"[Fields invalidos]..\",\n    \"message\": \"exemplo: Campo não preenchido...\" \n  }",
          "type": "json"
        },
        {
          "title": "500 Internal",
          "content": "HTTP/1.1 500 Internal Server Error\n\n  {\n    \"status\": false,\n    \"message\": \"Falha ao processar a requisição\", \n    \"error\": \"Mensagem de erro...\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/docs/usuario.js",
    "groupTitle": "Usuario",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>(Obrigatório) Chave primária</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..70",
            "optional": false,
            "field": "nome",
            "description": "<p>(Obrigatório)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "email",
            "description": "<p>(Obrigatório)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..255",
            "optional": false,
            "field": "password_hash",
            "description": "<p>(Obrigatório)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..0",
            "optional": false,
            "field": "createdat",
            "description": "<p>(Obrigatório)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..0",
            "optional": false,
            "field": "updatedat",
            "description": "<p>(Obrigatório)</p>"
          }
        ]
      }
    }
  }
] });
