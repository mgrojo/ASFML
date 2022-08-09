GNATdoc.Documentation = {
  "label": "Sf.Graphics.VertexBuffer",
  "qualifier": "",
  "summary": [
  ],
  "description": [
  ],
  "entities": [
    {
      "entities": [
        {
          "label": "sfVertexBufferUsage",
          "qualifier": "",
          "line": 40,
          "column": 9,
          "src": "srcs/sf-graphics-vertexbuffer.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 40,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "type"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfVertexBufferUsage",
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L40C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "is"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 41,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfVertexBufferStream",
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L41C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ","
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 42,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfVertexBufferDynamic",
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L42C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ","
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 43,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfVertexBufferStatic",
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L43C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";",
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L40C9"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": " Usage specifiers\n"
                },
                {
                  "kind": "span",
                  "text": "If data is going to be updated once or more every frame,\n"
                },
                {
                  "kind": "span",
                  "text": "set the usage to sfVertexBufferStream. If data is going\n"
                },
                {
                  "kind": "span",
                  "text": "to be set once and used for a long time without being\n"
                },
                {
                  "kind": "span",
                  "text": "modified, set the usage to sfVertexBufferUsageStatic.\n"
                },
                {
                  "kind": "span",
                  "text": "For everything else sfVertexBufferUsageDynamic should\n"
                },
                {
                  "kind": "span",
                  "text": "be a good compromise.\n"
                },
                {
                  "kind": "span",
                  "text": "Constantly changing data\n"
                },
                {
                  "kind": "span",
                  "text": "Occasionally changing data\n"
                },
                {
                  "kind": "span",
                  "text": "Rarely changing data\n"
                }
              ]
            }
          ],
          "literals": [
            {
              "label": "sfVertexBufferStream",
              "line": 41,
              "column": 7,
              "description": [
              ]
            },
            {
              "label": "sfVertexBufferDynamic",
              "line": 42,
              "column": 7,
              "description": [
              ]
            },
            {
              "label": "sfVertexBufferStatic",
              "line": 43,
              "column": 7,
              "description": [
              ]
            }
          ]
        }
      ],
      "label": "Simple types"
    },
    {
      "entities": [
        {
          "label": "bind",
          "qualifier": "",
          "line": 236,
          "column": 14,
          "src": "srcs/sf-graphics-vertexbuffer.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 236,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "bind",
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L236C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "vertexBuffer",
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L236C20"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfVertexBuffer_Ptr",
                      "href": "docs/sf__graphics___spec.html#L74C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": " Bind a vertex buffer for rendering\n"
                },
                {
                  "kind": "span",
                  "text": "This function is not part of the graphics API, it mustn't be\n"
                },
                {
                  "kind": "span",
                  "text": "used when drawing SFML entities. It must be used only if you\n"
                },
                {
                  "kind": "span",
                  "text": "mix sfVertexBuffer with OpenGL code.\n"
                },
                {
                  "kind": "span",
                  "text": "@code\n"
                },
                {
                  "kind": "span",
                  "text": "sfVertexBuffer* vb1, vb2;\n"
                },
                {
                  "kind": "span",
                  "text": "...\n"
                },
                {
                  "kind": "span",
                  "text": "sfVertexBuffer_bind(vb1);\n"
                },
                {
                  "kind": "span",
                  "text": "// draw OpenGL stuff that use vb1...\n"
                },
                {
                  "kind": "span",
                  "text": "sfVertexBuffer_bind(vb2);\n"
                },
                {
                  "kind": "span",
                  "text": "// draw OpenGL stuff that use vb2...\n"
                },
                {
                  "kind": "span",
                  "text": "sfVertexBuffer_bind(NULL);\n"
                },
                {
                  "kind": "span",
                  "text": "// draw OpenGL stuff that use no vertex buffer...\n"
                },
                {
                  "kind": "span",
                  "text": "@endcode\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "vertexBuffer",
              "line": 236,
              "column": 20,
              "type": {
                "label": "Sf.Graphics.sfVertexBuffer_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L74C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Pointer to the vertex buffer to bind, can be null to use no vertex buffer\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "copy",
          "qualifier": "",
          "line": 73,
          "column": 13,
          "src": "srcs/sf-graphics-vertexbuffer.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 73,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "copy",
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L73C13"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "vertexBuffer",
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L73C19"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfVertexBuffer_Ptr",
                      "href": "docs/sf__graphics___spec.html#L74C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfVertexBuffer_Ptr",
                      "href": "docs/sf__graphics___spec.html#L74C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": " Copy an existing vertex buffer\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "vertexBuffer",
              "line": 73,
              "column": 19,
              "type": {
                "label": "Sf.Graphics.sfVertexBuffer_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L74C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Vertex buffer to copy\n"
                    }
                  ]
                }
              ]
            }
          ],
          "returns": {
            "description": [
              {
                "kind": "paragraph",
                "children": [
                  {
                    "kind": "span",
                    "text": "Copied object\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "create",
          "qualifier": "",
          "line": 60,
          "column": 13,
          "src": "srcs/sf-graphics-vertexbuffer.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 60,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "create",
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L60C13"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 61,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "vertexCount",
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L61C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfUint32",
                      "href": "docs/sf___spec.html#L108C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 62,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "primitiveType",
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L62C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Sf.Graphics.PrimitiveType.sfPrimitiveType",
                      "href": "docs/sf__graphics__primitivetype___spec.html#L39C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 63,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "usage",
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L63C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfVertexBufferUsage",
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L40C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfVertexBuffer_Ptr",
                      "href": "docs/sf__graphics___spec.html#L74C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": " Create a new vertex buffer with a specific\n"
                },
                {
                  "kind": "span",
                  "text": "sfPrimitiveType and usage specifier.\n"
                },
                {
                  "kind": "span",
                  "text": "Creates the vertex buffer, allocating enough graphcis\n"
                },
                {
                  "kind": "span",
                  "text": "memory to hold @p vertexCount vertices, and sets its\n"
                },
                {
                  "kind": "span",
                  "text": "primitive type to @p type and usage to @p usage.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "vertexCount",
              "line": 61,
              "column": 7,
              "type": {
                "label": "Sf.sfUint32",
                "docHref": "docs/sf___spec.html#L108C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Amount of vertices\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "primitiveType",
              "line": 62,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.PrimitiveType.sfPrimitiveType",
                "docHref": "docs/sf__graphics__primitivetype___spec.html#L39C12"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Type of primitive\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "usage",
              "line": 63,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.VertexBuffer.sfVertexBufferUsage",
                "docHref": "docs/sf__graphics__vertexbuffer___spec.html#L40C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Usage specifier\n"
                    }
                  ]
                }
              ]
            }
          ],
          "returns": {
            "description": [
              {
                "kind": "paragraph",
                "children": [
                  {
                    "kind": "span",
                    "text": "A new sfVertexBuffer object\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "destroy",
          "qualifier": "",
          "line": 81,
          "column": 14,
          "src": "srcs/sf-graphics-vertexbuffer.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 81,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "destroy",
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L81C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "vertexBuffer",
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L81C23"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfVertexBuffer_Ptr",
                      "href": "docs/sf__graphics___spec.html#L74C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": " Destroy an existing vertex buffer\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "vertexBuffer",
              "line": 81,
              "column": 23,
              "type": {
                "label": "Sf.Graphics.sfVertexBuffer_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L74C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Vertex buffer to delete\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "getNativeHandle",
          "qualifier": "",
          "line": 160,
          "column": 13,
          "src": "srcs/sf-graphics-vertexbuffer.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 160,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "getNativeHandle",
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L160C13"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "vertexBuffer",
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L160C30"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfVertexBuffer_Ptr",
                      "href": "docs/sf__graphics___spec.html#L74C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfUint32",
                      "href": "docs/sf___spec.html#L108C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": " Get the underlying OpenGL handle of the vertex buffer.\n"
                },
                {
                  "kind": "span",
                  "text": "You shouldn't need to use this function, unless you have\n"
                },
                {
                  "kind": "span",
                  "text": "very specific stuff to implement that SFML doesn't support,\n"
                },
                {
                  "kind": "span",
                  "text": "or implement a temporary workaround until a bug is fixed.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "vertexBuffer",
              "line": 160,
              "column": 30,
              "type": {
                "label": "Sf.Graphics.sfVertexBuffer_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L74C9"
              },
              "description": [
              ]
            }
          ],
          "returns": {
            "description": [
              {
                "kind": "paragraph",
                "children": [
                  {
                    "kind": "span",
                    "text": "OpenGL handle of the vertex buffer or 0 if not yet created\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "getPrimitiveType",
          "qualifier": "",
          "line": 185,
          "column": 13,
          "src": "srcs/sf-graphics-vertexbuffer.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 185,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "getPrimitiveType",
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L185C13"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "vertexBuffer",
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L185C31"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfVertexBuffer_Ptr",
                      "href": "docs/sf__graphics___spec.html#L74C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Sf.Graphics.PrimitiveType.sfPrimitiveType",
                      "href": "docs/sf__graphics__primitivetype___spec.html#L39C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": " Get the type of primitives drawn by the vertex buffer\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "vertexBuffer",
              "line": 185,
              "column": 31,
              "type": {
                "label": "Sf.Graphics.sfVertexBuffer_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L74C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Vertex buffer object\n"
                    }
                  ]
                }
              ]
            }
          ],
          "returns": {
            "description": [
              {
                "kind": "paragraph",
                "children": [
                  {
                    "kind": "span",
                    "text": "Primitive type\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "getUsage",
          "qualifier": "",
          "line": 213,
          "column": 13,
          "src": "srcs/sf-graphics-vertexbuffer.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 213,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "getUsage",
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L213C13"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "vertexBuffer",
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L213C23"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfVertexBuffer_Ptr",
                      "href": "docs/sf__graphics___spec.html#L74C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfVertexBufferUsage",
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L40C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": " Get the usage specifier of this vertex buffer\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "vertexBuffer",
              "line": 213,
              "column": 23,
              "type": {
                "label": "Sf.Graphics.sfVertexBuffer_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L74C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Vertex buffer object\n"
                    }
                  ]
                }
              ]
            }
          ],
          "returns": {
            "description": [
              {
                "kind": "paragraph",
                "children": [
                  {
                    "kind": "span",
                    "text": "Usage specifier\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "getVertexCount",
          "qualifier": "",
          "line": 91,
          "column": 13,
          "src": "srcs/sf-graphics-vertexbuffer.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 91,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "getVertexCount",
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L91C13"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "vertexBuffer",
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L91C29"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfVertexBuffer_Ptr",
                      "href": "docs/sf__graphics___spec.html#L74C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfUint32",
                      "href": "docs/sf___spec.html#L108C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": " Return the vertex count\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "vertexBuffer",
              "line": 91,
              "column": 29,
              "type": {
                "label": "Sf.Graphics.sfVertexBuffer_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L74C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Vertex buffer object\n"
                    }
                  ]
                }
              ]
            }
          ],
          "returns": {
            "description": [
              {
                "kind": "paragraph",
                "children": [
                  {
                    "kind": "span",
                    "text": "Number of vertices in the vertex buffer\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "isAvailable",
          "qualifier": "",
          "line": 248,
          "column": 13,
          "src": "srcs/sf-graphics-vertexbuffer.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 248,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "isAvailable",
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L248C13"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfBool",
                      "href": "docs/sf___spec.html#L68C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": " Tell whether or not the system supports vertex buffers\n"
                },
                {
                  "kind": "span",
                  "text": "This function should always be called before using\n"
                },
                {
                  "kind": "span",
                  "text": "the vertex buffer features. If it returns false, then\n"
                },
                {
                  "kind": "span",
                  "text": "any attempt to use sf::VertexBuffer will fail.\n"
                }
              ]
            }
          ],
          "returns": {
            "description": [
              {
                "kind": "paragraph",
                "children": [
                  {
                    "kind": "span",
                    "text": "True if vertex buffers are supported, false otherwise\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "setPrimitiveType",
          "qualifier": "",
          "line": 174,
          "column": 14,
          "src": "srcs/sf-graphics-vertexbuffer.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 174,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "setPrimitiveType",
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L174C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "vertexBuffer",
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L174C32"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfVertexBuffer_Ptr",
                      "href": "docs/sf__graphics___spec.html#L74C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 175,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                               "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "primitiveType",
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L175C32"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Sf.Graphics.PrimitiveType.sfPrimitiveType",
                      "href": "docs/sf__graphics__primitivetype___spec.html#L39C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": " Set the type of primitives to draw\n"
                },
                {
                  "kind": "span",
                  "text": "This function defines how the vertices must be interpreted\n"
                },
                {
                  "kind": "span",
                  "text": "when it's time to draw them.\n"
                },
                {
                  "kind": "span",
                  "text": "The default primitive type is sf::Points.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "vertexBuffer",
              "line": 174,
              "column": 32,
              "type": {
                "label": "Sf.Graphics.sfVertexBuffer_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L74C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Vertex buffer object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "primitiveType",
              "line": 175,
              "column": 32,
              "type": {
                "label": "Sf.Graphics.PrimitiveType.sfPrimitiveType",
                "docHref": "docs/sf__graphics__primitivetype___spec.html#L39C12"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Type of primitive\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "setUsage",
          "qualifier": "",
          "line": 203,
          "column": 14,
          "src": "srcs/sf-graphics-vertexbuffer.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 203,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "setUsage",
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L203C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "vertexBuffer",
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L203C24"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfVertexBuffer_Ptr",
                      "href": "docs/sf__graphics___spec.html#L74C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "usage",
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L203C59"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfVertexBufferUsage",
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L40C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": " Set the usage specifier of this vertex buffer\n"
                },
                {
                  "kind": "span",
                  "text": "This function provides a hint about how this vertex buffer is\n"
                },
                {
                  "kind": "span",
                  "text": "going to be used in terms of data update frequency.\n"
                },
                {
                  "kind": "span",
                  "text": "After changing the usage specifier, the vertex buffer has\n"
                },
                {
                  "kind": "span",
                  "text": "to be updated with new data for the usage specifier to\n"
                },
                {
                  "kind": "span",
                  "text": "take effect.\n"
                },
                {
                  "kind": "span",
                  "text": "The default primitive type is sfVertexBufferStream.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "vertexBuffer",
              "line": 203,
              "column": 24,
              "type": {
                "label": "Sf.Graphics.sfVertexBuffer_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L74C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Vertex buffer object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "usage",
              "line": 203,
              "column": 59,
              "type": {
                "label": "Sf.Graphics.VertexBuffer.sfVertexBufferUsage",
                "docHref": "docs/sf__graphics__vertexbuffer___spec.html#L40C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Usage specifier\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "swap",
          "qualifier": "",
          "line": 148,
          "column": 14,
          "src": "srcs/sf-graphics-vertexbuffer.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 148,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "swap",
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L148C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "left",
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L148C20"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfVertexBuffer_Ptr",
                      "href": "docs/sf__graphics___spec.html#L74C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "right",
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L148C47"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfVertexBuffer_Ptr",
                      "href": "docs/sf__graphics___spec.html#L74C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": " Swap the contents of this vertex buffer with those of another\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "left",
              "line": 148,
              "column": 20,
              "type": {
                "label": "Sf.Graphics.sfVertexBuffer_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L74C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Instance to swap\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "right",
              "line": 148,
              "column": 47,
              "type": {
                "label": "Sf.Graphics.sfVertexBuffer_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L74C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Instance to swap with\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "update",
          "qualifier": "",
          "line": 124,
          "column": 13,
          "src": "srcs/sf-graphics-vertexbuffer.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 124,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "update",
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L124C13"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 125,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "vertexBuffer",
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L125C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfVertexBuffer_Ptr",
                      "href": "docs/sf__graphics___spec.html#L74C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 126,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "vertices",
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L126C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfVertex_Ptr",
                      "href": "docs/sf__graphics___spec.html#L68C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 127,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "vertexCount",
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L127C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "access"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "constant"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Sf.Graphics.Vertex.sfVertex",
                      "href": "docs/sf__graphics__vertex___spec.html#L29C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 128,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "offset",
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L128C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfUint32",
                      "href": "docs/sf___spec.html#L108C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfBool",
                      "href": "docs/sf___spec.html#L68C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": " Update a part of the buffer from an array of vertices\n"
                },
                {
                  "kind": "span",
                  "text": "@p offset is specified as the number of vertices to skip\n"
                },
                {
                  "kind": "span",
                  "text": "from the beginning of the buffer.\n"
                },
                {
                  "kind": "span",
                  "text": "If @p offset is 0 and @p vertexCount is equal to the size of\n"
                },
                {
                  "kind": "span",
                  "text": "the currently created buffer, its whole contents are replaced.\n"
                },
                {
                  "kind": "span",
                  "text": "If @p offset is 0 and @p vertexCount is greater than the\n"
                },
                {
                  "kind": "span",
                  "text": "size of the currently created buffer, a new buffer is created\n"
                },
                {
                  "kind": "span",
                  "text": "containing the vertex data.\n"
                },
                {
                  "kind": "span",
                  "text": "If @p offset is 0 and @p vertexCount is less than the size of\n"
                },
                {
                  "kind": "span",
                  "text": "the currently created buffer, only the corresponding region\n"
                },
                {
                  "kind": "span",
                  "text": "is updated.\n"
                },
                {
                  "kind": "span",
                  "text": "If @p offset is not 0 and @p offset + @p vertexCount is greater\n"
                },
                {
                  "kind": "span",
                  "text": "than the size of the currently created buffer, the update fails.\n"
                },
                {
                  "kind": "span",
                  "text": "No additional check is performed on the size of the vertex\n"
                },
                {
                  "kind": "span",
                  "text": "array, passing invalid arguments will lead to undefined\n"
                },
                {
                  "kind": "span",
                  "text": "behavior.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "vertexBuffer",
              "line": 125,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfVertexBuffer_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L74C9"
              },
              "description": [
              ]
            },
            {
              "label": "vertices",
              "line": 126,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfVertex_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L68C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Array of vertices to copy to the buffer\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "vertexCount",
              "line": 127,
              "column": 7,
              "type": {
                "label": ""
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Number of vertices to copy\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "offset",
              "line": 128,
              "column": 7,
              "type": {
                "label": "Sf.sfUint32",
                "docHref": "docs/sf___spec.html#L108C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Offset in the buffer to copy to\n"
                    }
                  ]
                }
              ]
            }
          ],
          "returns": {
            "description": [
              {
                "kind": "paragraph",
                "children": [
                  {
                    "kind": "span",
                    "text": "sfTrue if the update was successful\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "updateFromVertexBuffer",
          "qualifier": "",
          "line": 139,
          "column": 13,
          "src": "srcs/sf-graphics-vertexbuffer.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 139,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "updateFromVertexBuffer",
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L139C13"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "vertexBuffer",
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L139C37"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfVertexBuffer_Ptr",
                      "href": "docs/sf__graphics___spec.html#L74C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "other",
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L139C72"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfVertexBuffer_Ptr",
                      "href": "docs/sf__graphics___spec.html#L74C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfBool",
                      "href": "docs/sf___spec.html#L68C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": " Copy the contents of another buffer into this buffer\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "vertexBuffer",
              "line": 139,
              "column": 37,
              "type": {
                "label": "Sf.Graphics.sfVertexBuffer_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L74C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Vertex buffer object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "other",
              "line": 139,
              "column": 72,
              "type": {
                "label": "Sf.Graphics.sfVertexBuffer_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L74C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Vertex buffer whose contents to copy into first vertex buffer\n"
                    }
                  ]
                }
              ]
            }
          ],
          "returns": {
            "description": [
              {
                "kind": "paragraph",
                "children": [
                  {
                    "kind": "span",
                    "text": "sfTrue if the copy was successful\n"
                  }
                ]
              }
            ]
          }
        }
      ],
      "label": "Subprograms"
    }
  ]
};