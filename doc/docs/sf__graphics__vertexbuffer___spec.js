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
          "line": 37,
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
                  "number": 37,
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
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L37C9"
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
                  "number": 38,
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
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L38C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ","
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "  "
                    },
                    {
                      "kind": "span",
                      "cssClass": "comment",
                      "text": "--/< Constantly changing data"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 39,
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
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L39C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ","
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "comment",
                      "text": "--/< Occasionally changing data"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 40,
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
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L40C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "comment",
                      "text": "--/< Rarely changing data"
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
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";",
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L37C9"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "html",
                  "html": "",
                  "children": [
                  ]
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
                }
              ]
            }
          ],
          "literals": [
            {
              "label": "sfVertexBufferStream",
              "line": 38,
              "column": 7,
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Constantly changing data\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "sfVertexBufferDynamic",
              "line": 39,
              "column": 7,
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Occasionally changing data\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "sfVertexBufferStatic",
              "line": 40,
              "column": 7,
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Rarely changing data\n"
                    }
                  ]
                }
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
          "line": 249,
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
                  "number": 249,
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
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L249C14"
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
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L249C20"
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
                      "href": "docs/sf__graphics___spec.html#L125C9"
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
                  "kind": "html",
                  "html": "",
                  "children": [
                  ]
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
                  "kind": "html",
                  "html": "",
                  "children": [
                  ]
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
                  "text": "sfVertexBuffer_bind(`null`);\n"
                },
                {
                  "kind": "span",
                  "text": "// draw OpenGL stuff that use no vertex buffer...\n"
                },
                {
                  "kind": "html",
                  "html": "",
                  "children": [
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "vertexBuffer",
              "line": 249,
              "column": 20,
              "type": {
                "label": "Sf.Graphics.sfVertexBuffer_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L125C9"
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
          "line": 72,
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
                  "number": 72,
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
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L72C13"
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
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L72C19"
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
                      "href": "docs/sf__graphics___spec.html#L125C9"
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
                      "href": "docs/sf__graphics___spec.html#L125C9"
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
                  "kind": "html",
                  "html": "",
                  "children": [
                  ]
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
              "line": 72,
              "column": 19,
              "type": {
                "label": "Sf.Graphics.sfVertexBuffer_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L125C9"
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
          "line": 59,
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
                  "number": 59,
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
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L59C13"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 60,
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
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L60C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
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
                      "text": "sfSize_t",
                      "href": "docs/sf___spec.html#L110C9"
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
                  "number": 61,
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
                      "text": "Sf.Graphics.PrimitiveType.sfPrimitiveType",
                      "href": "docs/sf__graphics__primitivetype___spec.html#L29C12"
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
                      "text": "usage",
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L62C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "         "
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
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L37C9"
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
                      "href": "docs/sf__graphics___spec.html#L125C9"
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
                  "kind": "html",
                  "html": "",
                  "children": [
                  ]
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
                  "text": "Creates the vertex buffer, allocating enough graphics\n"
                },
                {
                  "kind": "span",
                  "text": "memory to hold\n"
                },
                {
                  "kind": "html",
                  "html": " <code>vertexCount</code> ",
                  "children": [
                  ]
                },
                {
                  "kind": "span",
                  "text": " vertices, and sets its\n"
                },
                {
                  "kind": "span",
                  "text": "primitive type to\n"
                },
                {
                  "kind": "html",
                  "html": " <code>type</code> ",
                  "children": [
                  ]
                },
                {
                  "kind": "span",
                  "text": " and usage to\n"
                },
                {
                  "kind": "html",
                  "html": " <code>usage.</code> ",
                  "children": [
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "vertexCount",
              "line": 60,
              "column": 7,
              "type": {
                "label": "Sf.sfSize_t",
                "docHref": "docs/sf___spec.html#L110C9"
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
              "line": 61,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.PrimitiveType.sfPrimitiveType",
                "docHref": "docs/sf__graphics__primitivetype___spec.html#L29C12"
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
              "line": 62,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.VertexBuffer.sfVertexBufferUsage",
                "docHref": "docs/sf__graphics__vertexbuffer___spec.html#L37C9"
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
          "line": 80,
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
                  "number": 80,
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
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L80C14"
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
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L80C23"
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
                      "href": "docs/sf__graphics___spec.html#L125C9"
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
                  "kind": "html",
                  "html": "",
                  "children": [
                  ]
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
              "line": 80,
              "column": 23,
              "type": {
                "label": "Sf.Graphics.sfVertexBuffer_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L125C9"
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
          "line": 167,
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
                  "number": 167,
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
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L167C13"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 168,
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
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L168C7"
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
                      "href": "docs/sf__graphics___spec.html#L125C9"
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
                      "href": "docs/sf___spec.html#L94C9"
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
                  "kind": "html",
                  "html": "",
                  "children": [
                  ]
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
              "line": 168,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfVertexBuffer_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L125C9"
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
          "line": 194,
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
                  "number": 194,
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
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L194C13"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 195,
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
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L195C7"
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
                      "href": "docs/sf__graphics___spec.html#L125C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 196,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
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
                      "href": "docs/sf__graphics__primitivetype___spec.html#L29C12"
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
                  "kind": "html",
                  "html": "",
                  "children": [
                  ]
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
              "line": 195,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfVertexBuffer_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L125C9"
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
          "line": 225,
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
                  "number": 225,
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
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L225C13"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 226,
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
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L226C7"
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
                      "href": "docs/sf__graphics___spec.html#L125C9"
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
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L37C9"
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
                  "kind": "html",
                  "html": "",
                  "children": [
                  ]
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
              "line": 226,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfVertexBuffer_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L125C9"
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
          "line": 90,
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
                  "number": 90,
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
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L90C13"
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
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L90C29"
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
                      "href": "docs/sf__graphics___spec.html#L125C9"
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
                      "text": "sfSize_t",
                      "href": "docs/sf___spec.html#L110C9"
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
                  "kind": "html",
                  "html": "",
                  "children": [
                  ]
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
              "line": 90,
              "column": 29,
              "type": {
                "label": "Sf.Graphics.sfVertexBuffer_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L125C9"
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
          "line": 261,
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
                  "number": 261,
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
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L261C13"
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
                      "href": "docs/sf___spec.html#L53C9"
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
                  "kind": "html",
                  "html": "",
                  "children": [
                  ]
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
                  "text": "any attempt to use sfVertexBuffer will fail.\n"
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
          "line": 182,
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
                  "number": 182,
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
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L182C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 183,
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
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L183C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "  "
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
                      "href": "docs/sf__graphics___spec.html#L125C9"
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
                  "number": 184,
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
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L184C7"
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
                      "href": "docs/sf__graphics__primitivetype___spec.html#L29C12"
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
                  "kind": "html",
                  "html": "",
                  "children": [
                  ]
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
                  "text": "The default primitive type is sfPoints.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "vertexBuffer",
              "line": 183,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfVertexBuffer_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L125C9"
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
              "line": 184,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.PrimitiveType.sfPrimitiveType",
                "docHref": "docs/sf__graphics__primitivetype___spec.html#L29C12"
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
          "line": 214,
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
                  "number": 214,
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
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L214C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 215,
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
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L215C7"
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
                      "href": "docs/sf__graphics___spec.html#L125C9"
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
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L215C42"
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
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L37C9"
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
                  "kind": "html",
                  "html": "",
                  "children": [
                  ]
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
              "line": 215,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfVertexBuffer_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L125C9"
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
              "line": 215,
              "column": 42,
              "type": {
                "label": "Sf.Graphics.VertexBuffer.sfVertexBufferUsage",
                "docHref": "docs/sf__graphics__vertexbuffer___spec.html#L37C9"
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
          "line": 155,
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
                  "number": 155,
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
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L155C14"
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
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L155C20"
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
                      "href": "docs/sf__graphics___spec.html#L125C9"
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
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L155C47"
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
                      "href": "docs/sf__graphics___spec.html#L125C9"
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
                  "kind": "html",
                  "html": "",
                  "children": [
                  ]
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
              "line": 155,
              "column": 20,
              "type": {
                "label": "Sf.Graphics.sfVertexBuffer_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L125C9"
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
              "line": 155,
              "column": 47,
              "type": {
                "label": "Sf.Graphics.sfVertexBuffer_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L125C9"
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
          "line": 129,
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
                  "number": 129,
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
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L129C13"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 130,
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
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L130C7"
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
                      "href": "docs/sf__graphics___spec.html#L125C9"
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
                  "number": 131,
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
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L131C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
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
                  "number": 132,
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
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L132C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "  "
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
                      "href": "docs/sf___spec.html#L94C9"
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
                  "number": 133,
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
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L133C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "       "
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
                      "href": "docs/sf___spec.html#L94C9"
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
                      "href": "docs/sf___spec.html#L53C9"
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
                  "kind": "html",
                  "html": "",
                  "children": [
                  ]
                },
                {
                  "kind": "span",
                  "text": " Update a part of the buffer from an array of vertices\n"
                },
                {
                  "kind": "html",
                  "html": " <code>offset</code> ",
                  "children": [
                  ]
                },
                {
                  "kind": "span",
                  "text": " is specified as the number of vertices to skip\n"
                },
                {
                  "kind": "span",
                  "text": "from the beginning of the buffer.\n"
                },
                {
                  "kind": "span",
                  "text": "If\n"
                },
                {
                  "kind": "html",
                  "html": " <code>offset</code> ",
                  "children": [
                  ]
                },
                {
                  "kind": "span",
                  "text": " is 0 and\n"
                },
                {
                  "kind": "html",
                  "html": " <code>vertexCount</code> ",
                  "children": [
                  ]
                },
                {
                  "kind": "span",
                  "text": " is equal to the size of\n"
                },
                {
                  "kind": "span",
                  "text": "the currently created buffer, its whole contents are replaced.\n"
                },
                {
                  "kind": "span",
                  "text": "If\n"
                },
                {
                  "kind": "html",
                  "html": " <code>offset</code> ",
                  "children": [
                  ]
                },
                {
                  "kind": "span",
                  "text": " is 0 and\n"
                },
                {
                  "kind": "html",
                  "html": " <code>vertexCount</code> ",
                  "children": [
                  ]
                },
                {
                  "kind": "span",
                  "text": " is greater than the\n"
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
                  "text": "If\n"
                },
                {
                  "kind": "html",
                  "html": " <code>offset</code> ",
                  "children": [
                  ]
                },
                {
                  "kind": "span",
                  "text": " is 0 and\n"
                },
                {
                  "kind": "html",
                  "html": " <code>vertexCount</code> ",
                  "children": [
                  ]
                },
                {
                  "kind": "span",
                  "text": " is less than the size of\n"
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
                  "text": "If\n"
                },
                {
                  "kind": "html",
                  "html": " <code>offset</code> ",
                  "children": [
                  ]
                },
                {
                  "kind": "span",
                  "text": " is not 0 and\n"
                },
                {
                  "kind": "html",
                  "html": " <code>offset</code> ",
                  "children": [
                  ]
                },
                {
                  "kind": "span",
                  "text": " +\n"
                },
                {
                  "kind": "html",
                  "html": " <code>vertexCount</code> ",
                  "children": [
                  ]
                },
                {
                  "kind": "span",
                  "text": " is greater\n"
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
              "line": 130,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfVertexBuffer_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L125C9"
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
              "label": "vertices",
              "line": 131,
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
                      "text": "Array of vertices to copy to the buffer\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "vertexCount",
              "line": 132,
              "column": 7,
              "type": {
                "label": "Sf.sfUint32",
                "docHref": "docs/sf___spec.html#L94C9"
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
              "line": 133,
              "column": 7,
              "type": {
                "label": "Sf.sfUint32",
                "docHref": "docs/sf___spec.html#L94C9"
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
          "line": 144,
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
                  "number": 144,
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
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L144C13"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 145,
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
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L145C7"
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
                      "href": "docs/sf__graphics___spec.html#L125C9"
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
                      "href": "docs/sf__graphics__vertexbuffer___spec.html#L145C42"
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
                      "href": "docs/sf__graphics___spec.html#L125C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 146,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
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
                      "href": "docs/sf___spec.html#L53C9"
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
                  "kind": "html",
                  "html": "",
                  "children": [
                  ]
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
              "line": 145,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfVertexBuffer_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L125C9"
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
              "line": 145,
              "column": 42,
              "type": {
                "label": "Sf.Graphics.sfVertexBuffer_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L125C9"
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