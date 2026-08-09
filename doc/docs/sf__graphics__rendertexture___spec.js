GNATdoc.Documentation = {
  "label": "Sf.Graphics.RenderTexture",
  "qualifier": "",
  "summary": [
  ],
  "description": [
  ],
  "entities": [
    {
      "entities": [
        {
          "label": "clear",
          "qualifier": "",
          "line": 120,
          "column": 14,
          "src": "srcs/sf-graphics-rendertexture.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 120,
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
                      "text": "clear",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L120C14"
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
                      "text": "renderTexture",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L120C21"
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
                      "text": "sfRenderTexture_Ptr",
                      "href": "docs/sf__graphics___spec.html#L98C9"
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
                  "number": 121,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                    "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "color",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L121C37"
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
                      "text": "Sf.Graphics.Color.sfColor",
                      "href": "docs/sf__graphics__color___spec.html#L33C9"
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
                  "text": " Clear the rendertexture with the given color\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderTexture",
              "line": 120,
              "column": 21,
              "type": {
                "label": "Sf.Graphics.sfRenderTexture_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L98C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render texture object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "color",
              "line": 121,
              "column": 37,
              "type": {
                "label": "Sf.Graphics.Color.sfColor",
                "docHref": "docs/sf__graphics__color___spec.html#L33C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Fill color\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "clearColorAndStencil",
          "qualifier": "",
          "line": 147,
          "column": 14,
          "src": "srcs/sf-graphics-rendertexture.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 147,
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
                      "text": "clearColorAndStencil",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L147C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 148,
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
                      "text": "renderTexture",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L148C7"
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
                      "text": "sfRenderTexture_Ptr",
                      "href": "docs/sf__graphics___spec.html#L98C9"
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
                  "number": 149,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "color",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L149C7"
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
                      "text": "Sf.Graphics.Color.sfColor",
                      "href": "docs/sf__graphics__color___spec.html#L33C9"
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
                  "number": 150,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "stencilValue",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L150C7"
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
                      "text": "sfStencilValue",
                      "href": "docs/sf__graphics___spec.html#L62C9"
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
                  "text": " Clear the entire target with a single color and stencil value\n"
                },
                {
                  "kind": "span",
                  "text": "The specified stencil value is truncated to the bit width of the\n"
                },
                {
                  "kind": "span",
                  "text": "current stencil buffer.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderTexture",
              "line": 148,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfRenderTexture_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L98C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render texture object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "color",
              "line": 149,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.Color.sfColor",
                "docHref": "docs/sf__graphics__color___spec.html#L33C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Fill color to use\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "stencilValue",
              "line": 150,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfStencilValue",
                "docHref": "docs/sf__graphics___spec.html#L62C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Stencil value to clear to\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "clearStencil",
          "qualifier": "",
          "line": 133,
          "column": 14,
          "src": "srcs/sf-graphics-rendertexture.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 133,
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
                      "text": "clearStencil",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L133C14"
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
                      "text": "renderTexture",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L133C28"
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
                      "text": "sfRenderTexture_Ptr",
                      "href": "docs/sf__graphics___spec.html#L98C9"
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
                  "number": 134,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                           "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "stencilValue",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L134C28"
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
                      "text": "sfStencilValue",
                      "href": "docs/sf__graphics___spec.html#L62C9"
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
                  "text": " Clear the stencil buffer to a specific value\n"
                },
                {
                  "kind": "span",
                  "text": "The specified value is truncated to the bit width of the\n"
                },
                {
                  "kind": "span",
                  "text": "current stencil buffer.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderTexture",
              "line": 133,
              "column": 28,
              "type": {
                "label": "Sf.Graphics.sfRenderTexture_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L98C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render texture object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "stencilValue",
              "line": 134,
              "column": 28,
              "type": {
                "label": "Sf.Graphics.sfStencilValue",
                "docHref": "docs/sf__graphics___spec.html#L62C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Stencil value to clear to\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "create",
          "qualifier": "",
          "line": 39,
          "column": 14,
          "src": "srcs/sf-graphics-rendertexture.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 39,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "    "
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
                      "href": "docs/sf__graphics__rendertexture___spec.html#L39C14"
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
                      "text": "       "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "size",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L40C9"
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
                      "text": "Sf.System.Vector2.sfVector2u",
                      "href": "docs/sf__system__vector2___spec.html#L34C9"
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
                  "number": 41,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "        "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "settings",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L41C9"
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
                      "text": "Sf.Window.Window.sfContextSettings",
                      "href": "docs/sf__window__window___spec.html#L43C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":="
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "null"
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
                  "number": 42,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "         "
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
                      "text": "sfRenderTexture_Ptr",
                      "href": "docs/sf__graphics___spec.html#L98C9"
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
                  "text": " Construct a new render texture\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "size",
              "line": 40,
              "column": 9,
              "type": {
                "label": "Sf.System.Vector2.sfVector2u",
                "docHref": "docs/sf__system__vector2___spec.html#L34C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Size of the render texture\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "settings",
              "line": 41,
              "column": 9,
              "type": {
                "label": ""
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Settings of the render texture (null to use defaults)\n"
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
                    "text": "A new sfRenderTexture object, or null if it failed\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "create",
          "qualifier": "",
          "line": 50,
          "column": 14,
          "src": "srcs/sf-graphics-rendertexture.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 50,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "    "
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
                      "href": "docs/sf__graphics__rendertexture___spec.html#L50C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 51,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "       "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "width",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L51C9"
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
                  "number": 52,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "        "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "height",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L52C9"
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
                  "number": 53,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "        "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "settings",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L53C9"
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
                      "text": "Sf.Window.Window.sfContextSettings",
                      "href": "docs/sf__window__window___spec.html#L43C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":="
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "null"
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
                  "number": 54,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "         "
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
                      "text": "sfRenderTexture_Ptr",
                      "href": "docs/sf__graphics___spec.html#L98C9"
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
                  "number": 55,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "            "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "create"
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
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "x"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "=>"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "width"
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
                      "cssClass": "identifier",
                      "text": "y"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "=>"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "height"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
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
                      "cssClass": "identifier",
                      "text": "settings"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
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
                  "text": " Compatibility overloads accepting width/height inputs\n"
                },
                {
                  "kind": "html",
                  "html": "<br/><br/><span class=\"danger\">Deprecated!</span> ",
                  "children": [
                  ]
                },
                {
                  "kind": "span",
                  "text": " Use the overload that takes a size vector instead\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "width",
              "line": 51,
              "column": 9,
              "type": {
                "label": "Sf.sfUint32",
                "docHref": "docs/sf___spec.html#L94C9"
              },
              "description": [
              ]
            },
            {
              "label": "height",
              "line": 52,
              "column": 9,
              "type": {
                "label": "Sf.sfUint32",
                "docHref": "docs/sf___spec.html#L94C9"
              },
              "description": [
              ]
            },
            {
              "label": "settings",
              "line": 53,
              "column": 9,
              "type": {
                "label": ""
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "createWithSettings",
          "qualifier": "",
          "line": 57,
          "column": 14,
          "src": "srcs/sf-graphics-rendertexture.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 57,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "    "
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
                      "text": "createWithSettings",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L57C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 58,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "       "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "width",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L58C9"
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
                  "number": 59,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "         "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "height",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L59C10"
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
                  "number": 60,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "         "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "settings",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L60C10"
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
                      "text": "Sf.Window.Window.sfContextSettings",
                      "href": "docs/sf__window__window___spec.html#L43C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":="
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "null"
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
                  "number": 61,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "         "
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
                      "text": "sfRenderTexture_Ptr",
                      "href": "docs/sf__graphics___spec.html#L98C9"
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
                  "number": 62,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "            "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "create"
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
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "x"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "=>"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "width"
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
                      "cssClass": "identifier",
                      "text": "y"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "=>"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "height"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
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
                      "cssClass": "identifier",
                      "text": "settings"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
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
            }
          ],
          "parameters": [
            {
              "label": "width",
              "line": 58,
              "column": 9,
              "type": {
                "label": "Sf.sfUint32",
                "docHref": "docs/sf___spec.html#L94C9"
              },
              "description": [
              ]
            },
            {
              "label": "height",
              "line": 59,
              "column": 10,
              "type": {
                "label": "Sf.sfUint32",
                "docHref": "docs/sf___spec.html#L94C9"
              },
              "description": [
              ]
            },
            {
              "label": "settings",
              "line": 60,
              "column": 10,
              "type": {
                "label": ""
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "destroy",
          "qualifier": "",
          "line": 70,
          "column": 14,
          "src": "srcs/sf-graphics-rendertexture.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 70,
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
                      "href": "docs/sf__graphics__rendertexture___spec.html#L70C14"
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
                      "text": "renderTexture",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L70C23"
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
                      "text": "sfRenderTexture_Ptr",
                      "href": "docs/sf__graphics___spec.html#L98C9"
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
                  "text": " Destroy an existing render texture\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderTexture",
              "line": 70,
              "column": 23,
              "type": {
                "label": "Sf.Graphics.sfRenderTexture_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L98C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render texture to destroy\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "display",
          "qualifier": "",
          "line": 111,
          "column": 14,
          "src": "srcs/sf-graphics-rendertexture.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 111,
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
                      "text": "display",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L111C14"
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
                      "text": "renderTexture",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L111C23"
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
                      "text": "sfRenderTexture_Ptr",
                      "href": "docs/sf__graphics___spec.html#L98C9"
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
                  "text": " Update the contents of the target texture\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderTexture",
              "line": 111,
              "column": 23,
              "type": {
                "label": "Sf.Graphics.sfRenderTexture_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L98C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render texture object\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "drawCircleShape",
          "qualifier": "",
          "line": 288,
          "column": 14,
          "src": "srcs/sf-graphics-rendertexture.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 288,
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
                      "text": "drawCircleShape",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L288C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 289,
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
                      "text": "renderTexture",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L289C7"
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
                      "text": "sfRenderTexture_Ptr",
                      "href": "docs/sf__graphics___spec.html#L98C9"
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
                  "number": 290,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "object",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L290C7"
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
                      "text": "sfCircleShape_Ptr",
                      "href": "docs/sf__graphics___spec.html#L80C9"
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
                  "number": 291,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "states",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L291C7"
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
                      "text": "Sf.Graphics.RenderStates.sfRenderStates",
                      "href": "docs/sf__graphics__renderstates___spec.html#L29C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":="
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "null"
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
            }
          ],
          "parameters": [
            {
              "label": "renderTexture",
              "line": 289,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfRenderTexture_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L98C9"
              },
              "description": [
              ]
            },
            {
              "label": "object",
              "line": 290,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfCircleShape_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L80C9"
              },
              "description": [
              ]
            },
            {
              "label": "states",
              "line": 291,
              "column": 7,
              "type": {
                "label": ""
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "drawConvexShape",
          "qualifier": "",
          "line": 293,
          "column": 14,
          "src": "srcs/sf-graphics-rendertexture.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 293,
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
                      "text": "drawConvexShape",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L293C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 294,
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
                      "text": "renderTexture",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L294C7"
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
                      "text": "sfRenderTexture_Ptr",
                      "href": "docs/sf__graphics___spec.html#L98C9"
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
                  "number": 295,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "object",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L295C7"
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
                      "text": "sfConvexShape_Ptr",
                      "href": "docs/sf__graphics___spec.html#L83C9"
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
                  "number": 296,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "states",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L296C7"
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
                      "text": "Sf.Graphics.RenderStates.sfRenderStates",
                      "href": "docs/sf__graphics__renderstates___spec.html#L29C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":="
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "null"
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
            }
          ],
          "parameters": [
            {
              "label": "renderTexture",
              "line": 294,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfRenderTexture_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L98C9"
              },
              "description": [
              ]
            },
            {
              "label": "object",
              "line": 295,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfConvexShape_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L83C9"
              },
              "description": [
              ]
            },
            {
              "label": "states",
              "line": 296,
              "column": 7,
              "type": {
                "label": ""
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "drawPrimitives",
          "qualifier": "",
          "line": 342,
          "column": 14,
          "src": "srcs/sf-graphics-rendertexture.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 342,
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
                      "text": "drawPrimitives",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L342C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 343,
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
                      "text": "renderTexture",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L343C7"
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
                      "text": "sfRenderTexture_Ptr",
                      "href": "docs/sf__graphics___spec.html#L98C9"
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
                  "number": 344,
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
                      "href": "docs/sf__graphics__rendertexture___spec.html#L344C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
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
                  "number": 345,
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
                      "href": "docs/sf__graphics__rendertexture___spec.html#L345C7"
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
                  "number": 346,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "         "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "primitiveType",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L346C10"
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
                  "number": 347,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "         "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "states",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L347C10"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "        "
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
                      "text": "Sf.Graphics.RenderStates.sfRenderStates",
                      "href": "docs/sf__graphics__renderstates___spec.html#L29C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":="
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "null"
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
                  "text": " Draw primitives defined by an array of vertices to a render texture\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderTexture",
              "line": 343,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfRenderTexture_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L98C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render texture object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "vertices",
              "line": 344,
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
                      "text": "Pointer to the vertices\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "vertexCount",
              "line": 345,
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
                      "text": "Number of vertices in the array\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "primitiveType",
              "line": 346,
              "column": 10,
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
                      "text": "Type of primitives to draw\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "states",
              "line": 347,
              "column": 10,
              "type": {
                "label": ""
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render states to use for drawing (null to use the default states)\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "drawRectangleShape",
          "qualifier": "",
          "line": 298,
          "column": 14,
          "src": "srcs/sf-graphics-rendertexture.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 298,
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
                      "text": "drawRectangleShape",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L298C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 299,
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
                      "text": "renderTexture",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L299C7"
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
                      "text": "sfRenderTexture_Ptr",
                      "href": "docs/sf__graphics___spec.html#L98C9"
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
                  "number": 300,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "object",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L300C7"
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
                      "text": "sfRectangleShape_Ptr",
                      "href": "docs/sf__graphics___spec.html#L95C9"
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
                  "number": 301,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "states",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L301C7"
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
                      "text": "Sf.Graphics.RenderStates.sfRenderStates",
                      "href": "docs/sf__graphics__renderstates___spec.html#L29C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":="
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "null"
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
            }
          ],
          "parameters": [
            {
              "label": "renderTexture",
              "line": 299,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfRenderTexture_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L98C9"
              },
              "description": [
              ]
            },
            {
              "label": "object",
              "line": 300,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfRectangleShape_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L95C9"
              },
              "description": [
              ]
            },
            {
              "label": "states",
              "line": 301,
              "column": 7,
              "type": {
                "label": ""
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "drawShape",
          "qualifier": "",
          "line": 283,
          "column": 14,
          "src": "srcs/sf-graphics-rendertexture.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 283,
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
                      "text": "drawShape",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L283C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 284,
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
                      "text": "renderTexture",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L284C7"
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
                      "text": "sfRenderTexture_Ptr",
                      "href": "docs/sf__graphics___spec.html#L98C9"
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
                  "number": 285,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "object",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L285C7"
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
                      "text": "sfShape_Ptr",
                      "href": "docs/sf__graphics___spec.html#L104C9"
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
                  "number": 286,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "states",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L286C7"
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
                      "text": "Sf.Graphics.RenderStates.sfRenderStates",
                      "href": "docs/sf__graphics__renderstates___spec.html#L29C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":="
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "null"
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
            }
          ],
          "parameters": [
            {
              "label": "renderTexture",
              "line": 284,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfRenderTexture_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L98C9"
              },
              "description": [
              ]
            },
            {
              "label": "object",
              "line": 285,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfShape_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L104C9"
              },
              "description": [
              ]
            },
            {
              "label": "states",
              "line": 286,
              "column": 7,
              "type": {
                "label": ""
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "drawSprite",
          "qualifier": "",
          "line": 273,
          "column": 14,
          "src": "srcs/sf-graphics-rendertexture.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 273,
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
                      "text": "drawSprite",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L273C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 274,
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
                      "text": "renderTexture",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L274C7"
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
                      "text": "sfRenderTexture_Ptr",
                      "href": "docs/sf__graphics___spec.html#L98C9"
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
                  "number": 275,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "object",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L275C7"
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
                      "text": "sfSprite_Ptr",
                      "href": "docs/sf__graphics___spec.html#L107C9"
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
                  "number": 276,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "states",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L276C7"
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
                      "text": "Sf.Graphics.RenderStates.sfRenderStates",
                      "href": "docs/sf__graphics__renderstates___spec.html#L29C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":="
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "null"
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
                  "text": " Draw a drawable object to the render-target\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderTexture",
              "line": 274,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfRenderTexture_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L98C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render texture object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "object",
              "line": 275,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfSprite_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L107C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Object to draw\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "states",
              "line": 276,
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
                      "text": "Render states to use for drawing (null to use the default states)\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "drawText",
          "qualifier": "",
          "line": 278,
          "column": 14,
          "src": "srcs/sf-graphics-rendertexture.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 278,
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
                      "text": "drawText",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L278C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 279,
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
                      "text": "renderTexture",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L279C7"
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
                      "text": "sfRenderTexture_Ptr",
                      "href": "docs/sf__graphics___spec.html#L98C9"
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
                  "number": 280,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "object",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L280C7"
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
                      "text": "sfText_Ptr",
                      "href": "docs/sf__graphics___spec.html#L110C9"
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
                  "number": 281,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "states",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L281C7"
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
                      "text": "Sf.Graphics.RenderStates.sfRenderStates",
                      "href": "docs/sf__graphics__renderstates___spec.html#L29C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":="
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "null"
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
            }
          ],
          "parameters": [
            {
              "label": "renderTexture",
              "line": 279,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfRenderTexture_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L98C9"
              },
              "description": [
              ]
            },
            {
              "label": "object",
              "line": 280,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfText_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L110C9"
              },
              "description": [
              ]
            },
            {
              "label": "states",
              "line": 281,
              "column": 7,
              "type": {
                "label": ""
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "drawVertexArray",
          "qualifier": "",
          "line": 303,
          "column": 14,
          "src": "srcs/sf-graphics-rendertexture.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 303,
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
                      "text": "drawVertexArray",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L303C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 304,
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
                      "text": "renderTexture",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L304C7"
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
                      "text": "sfRenderTexture_Ptr",
                      "href": "docs/sf__graphics___spec.html#L98C9"
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
                  "number": 305,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "object",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L305C7"
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
                      "text": "sfVertexArray_Ptr",
                      "href": "docs/sf__graphics___spec.html#L122C9"
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
                  "number": 306,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "states",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L306C7"
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
                      "text": "Sf.Graphics.RenderStates.sfRenderStates",
                      "href": "docs/sf__graphics__renderstates___spec.html#L29C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":="
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "null"
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
            }
          ],
          "parameters": [
            {
              "label": "renderTexture",
              "line": 304,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfRenderTexture_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L98C9"
              },
              "description": [
              ]
            },
            {
              "label": "object",
              "line": 305,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfVertexArray_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L122C9"
              },
              "description": [
              ]
            },
            {
              "label": "states",
              "line": 306,
              "column": 7,
              "type": {
                "label": ""
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "drawVertexBuffer",
          "qualifier": "",
          "line": 308,
          "column": 14,
          "src": "srcs/sf-graphics-rendertexture.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 308,
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
                      "text": "drawVertexBuffer",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L308C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 309,
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
                      "text": "renderTexture",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L309C7"
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
                      "text": "sfRenderTexture_Ptr",
                      "href": "docs/sf__graphics___spec.html#L98C9"
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
                  "number": 310,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "object",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L310C7"
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
                  "number": 311,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "states",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L311C7"
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
                      "text": "Sf.Graphics.RenderStates.sfRenderStates",
                      "href": "docs/sf__graphics__renderstates___spec.html#L29C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":="
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "null"
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
            }
          ],
          "parameters": [
            {
              "label": "renderTexture",
              "line": 309,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfRenderTexture_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L98C9"
              },
              "description": [
              ]
            },
            {
              "label": "object",
              "line": 310,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfVertexBuffer_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L125C9"
              },
              "description": [
              ]
            },
            {
              "label": "states",
              "line": 311,
              "column": 7,
              "type": {
                "label": ""
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "drawVertexBufferRange",
          "qualifier": "",
          "line": 324,
          "column": 15,
          "src": "srcs/sf-graphics-rendertexture.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 324,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "    "
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
                      "text": "drawVertexBufferRange",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L324C15"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 325,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "       "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "renderTexture",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L325C9"
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
                      "text": "sfRenderTexture_Ptr",
                      "href": "docs/sf__graphics___spec.html#L98C9"
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
                  "number": 326,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "         "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "object",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L326C10"
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
                  "number": 327,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "         "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "firstVertex",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L327C10"
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
                  "number": 328,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "         "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "vertexCount",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L328C10"
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
                  "number": 329,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "         "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "states",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L329C10"
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
                      "text": "Sf.Graphics.RenderStates.sfRenderStates",
                      "href": "docs/sf__graphics__renderstates___spec.html#L29C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":="
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "null"
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
                  "text": " Draw primitives defined by a vertex buffer.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderTexture",
              "line": 325,
              "column": 9,
              "type": {
                "label": "Sf.Graphics.sfRenderTexture_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L98C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "render texture object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "object",
              "line": 326,
              "column": 10,
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
                      "text": "Vertex buffer object to draw\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "firstVertex",
              "line": 327,
              "column": 10,
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
                      "text": "Index of the first vertex to render\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "vertexCount",
              "line": 328,
              "column": 10,
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
                      "text": "Number of vertices to render\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "states",
              "line": 329,
              "column": 10,
              "type": {
                "label": ""
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render states to use for drawing\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "generateMipmap",
          "qualifier": "",
          "line": 467,
          "column": 13,
          "src": "srcs/sf-graphics-rendertexture.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 467,
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
                      "text": "generateMipmap",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L467C13"
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
                      "text": "renderTexture",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L467C29"
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
                      "text": "sfRenderTexture_Ptr",
                      "href": "docs/sf__graphics___spec.html#L98C9"
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
                  "text": " Generate a mipmap using the current texture data\n"
                },
                {
                  "kind": "span",
                  "text": "This function is similar to sfTexture_generateMipmap and operates\n"
                },
                {
                  "kind": "span",
                  "text": "on the texture used as the target for drawing.\n"
                },
                {
                  "kind": "span",
                  "text": "Be aware that any draw operation may modify the base level image data.\n"
                },
                {
                  "kind": "span",
                  "text": "For this reason, calling this function only makes sense after all\n"
                },
                {
                  "kind": "span",
                  "text": "drawing is completed and display has been called. Not calling display\n"
                },
                {
                  "kind": "span",
                  "text": "after subsequent drawing will lead to undefined behavior if a mipmap\n"
                },
                {
                  "kind": "span",
                  "text": "had been previously generated.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderTexture",
              "line": 467,
              "column": 29,
              "type": {
                "label": "Sf.Graphics.sfRenderTexture_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L98C9"
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
                    "text": "sfTrue if mipmap generation was successful, sfFalse if unsuccessful\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "getDefaultView",
          "qualifier": "",
          "line": 180,
          "column": 13,
          "src": "srcs/sf-graphics-rendertexture.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 180,
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
                      "text": "getDefaultView",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L180C13"
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
                      "text": "renderTexture",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L180C29"
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
                      "text": "sfRenderTexture_Ptr",
                      "href": "docs/sf__graphics___spec.html#L98C9"
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
                      "text": "sfView_Ptr",
                      "href": "docs/sf__graphics___spec.html#L128C9"
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
                  "text": " Get the default view of a render texture\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderTexture",
              "line": 180,
              "column": 29,
              "type": {
                "label": "Sf.Graphics.sfRenderTexture_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L98C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render texture object\n"
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
                    "text": "Default view of the rendertexture\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "getMaximumAntiAliasingLevel",
          "qualifier": "",
          "line": 413,
          "column": 13,
          "src": "srcs/sf-graphics-rendertexture.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 413,
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
                      "text": "getMaximumAntiAliasingLevel",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L413C13"
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
                  "text": " Get the maximum anti-aliasing level supported by the system\n"
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
                    "text": "The maximum anti-aliasing level supported by the system\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "getScissor",
          "qualifier": "",
          "line": 203,
          "column": 13,
          "src": "srcs/sf-graphics-rendertexture.ads.html",
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
                      "text": "getScissor",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L203C13"
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
                      "text": "renderTexture",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L203C25"
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
                      "text": "sfRenderTexture_Ptr",
                      "href": "docs/sf__graphics___spec.html#L98C9"
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
                  "number": 204,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                        "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "view",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L204C25"
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
                      "text": "sfView_Ptr",
                      "href": "docs/sf__graphics___spec.html#L128C9"
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
                      "text": "Sf.Graphics.Rect.sfIntRect",
                      "href": "docs/sf__graphics__rect___spec.html#L33C9"
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
                  "text": " Get the scissor rectangle of a view applied to this target\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderTexture",
              "line": 203,
              "column": 25,
              "type": {
                "label": "Sf.Graphics.sfRenderTexture_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L98C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render texture object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "view",
              "line": 204,
              "column": 25,
              "type": {
                "label": "Sf.Graphics.sfView_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L128C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Target view\n"
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
                    "text": "Scissor rectangle, expressed in pixels\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "getSize",
          "qualifier": "",
          "line": 80,
          "column": 13,
          "src": "srcs/sf-graphics-rendertexture.ads.html",
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
                      "text": "getSize",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L80C13"
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
                      "text": "renderTexture",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L80C22"
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
                      "text": "sfRenderTexture_Ptr",
                      "href": "docs/sf__graphics___spec.html#L98C9"
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
                  "number": 81,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                    "
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
                      "text": "Sf.System.Vector2.sfVector2u",
                      "href": "docs/sf__system__vector2___spec.html#L34C9"
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
                  "text": " Get the size of the rendering region of a render texture\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderTexture",
              "line": 80,
              "column": 22,
              "type": {
                "label": "Sf.Graphics.sfRenderTexture_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L98C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render texture object\n"
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
                    "text": "Size in pixels\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "getTexture",
          "qualifier": "",
          "line": 405,
          "column": 13,
          "src": "srcs/sf-graphics-rendertexture.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 405,
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
                      "text": "getTexture",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L405C13"
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
                      "text": "renderTexture",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L405C25"
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
                      "text": "sfRenderTexture_Ptr",
                      "href": "docs/sf__graphics___spec.html#L98C9"
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
                      "text": "sfTexture_Ptr",
                      "href": "docs/sf__graphics___spec.html#L113C9"
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
                  "text": " Get the target texture of a render texture\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderTexture",
              "line": 405,
              "column": 25,
              "type": {
                "label": "Sf.Graphics.sfRenderTexture_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L98C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render texture object\n"
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
                    "text": "Pointer to the target texture\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "getView",
          "qualifier": "",
          "line": 170,
          "column": 13,
          "src": "srcs/sf-graphics-rendertexture.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 170,
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
                      "text": "getView",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L170C13"
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
                      "text": "renderTexture",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L170C22"
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
                      "text": "sfRenderTexture_Ptr",
                      "href": "docs/sf__graphics___spec.html#L98C9"
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
                      "text": "sfView_Ptr",
                      "href": "docs/sf__graphics___spec.html#L128C9"
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
                  "text": " Get the current active view of a render texture\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderTexture",
              "line": 170,
              "column": 22,
              "type": {
                "label": "Sf.Graphics.sfRenderTexture_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L98C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render texture object\n"
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
                    "text": "Current active view\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "getViewport",
          "qualifier": "",
          "line": 191,
          "column": 13,
          "src": "srcs/sf-graphics-rendertexture.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 191,
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
                      "text": "getViewport",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L191C13"
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
                      "text": "renderTexture",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L191C26"
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
                      "text": "sfRenderTexture_Ptr",
                      "href": "docs/sf__graphics___spec.html#L98C9"
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
                      "text": "view",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L191C63"
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
                      "text": "sfView_Ptr",
                      "href": "docs/sf__graphics___spec.html#L128C9"
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
                  "number": 192,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                        "
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
                      "text": "Sf.Graphics.Rect.sfIntRect",
                      "href": "docs/sf__graphics__rect___spec.html#L33C9"
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
                  "text": " Get the viewport of a view applied to this target\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderTexture",
              "line": 191,
              "column": 26,
              "type": {
                "label": "Sf.Graphics.sfRenderTexture_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L98C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render texture object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "view",
              "line": 191,
              "column": 63,
              "type": {
                "label": "Sf.Graphics.sfView_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L128C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Target view\n"
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
                    "text": "Viewport rectangle, expressed in pixels in the current target\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "isRepeated",
          "qualifier": "",
          "line": 451,
          "column": 13,
          "src": "srcs/sf-graphics-rendertexture.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 451,
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
                      "text": "isRepeated",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L451C13"
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
                      "text": "renderTexture",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L451C25"
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
                      "text": "sfRenderTexture_Ptr",
                      "href": "docs/sf__graphics___spec.html#L98C9"
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
                  "text": " Tell whether the texture is repeated or not\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderTexture",
              "line": 451,
              "column": 25,
              "type": {
                "label": "Sf.Graphics.sfRenderTexture_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L98C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render texture object\n"
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
                    "text": "sfTrue if repeat mode is enabled, sfFalse if it is disabled\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "isSmooth",
          "qualifier": "",
          "line": 432,
          "column": 13,
          "src": "srcs/sf-graphics-rendertexture.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 432,
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
                      "text": "isSmooth",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L432C13"
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
                      "text": "renderTexture",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L432C23"
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
                      "text": "sfRenderTexture_Ptr",
                      "href": "docs/sf__graphics___spec.html#L98C9"
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
                  "text": " Tell whether the smooth filter is enabled or not for a render texture\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderTexture",
              "line": 432,
              "column": 23,
              "type": {
                "label": "Sf.Graphics.sfRenderTexture_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L98C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render texture object\n"
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
                    "text": "sfTrue if smoothing is enabled, sfFalse if it is disabled\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "isSrgb",
          "qualifier": "",
          "line": 91,
          "column": 13,
          "src": "srcs/sf-graphics-rendertexture.ads.html",
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
                      "text": "isSrgb",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L91C13"
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
                      "text": "renderTexture",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L91C21"
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
                      "text": "sfRenderTexture_Ptr",
                      "href": "docs/sf__graphics___spec.html#L98C9"
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
                  "text": " Tell if the render texture will use sRGB encoding when drawing on it\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderTexture",
              "line": 91,
              "column": 21,
              "type": {
                "label": "Sf.Graphics.sfRenderTexture_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L98C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render texture object\n"
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
                    "text": "sfTrue if the render texture use sRGB encoding, sfFalse otherwise\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "mapCoordsToPixel",
          "qualifier": "",
          "line": 260,
          "column": 13,
          "src": "srcs/sf-graphics-rendertexture.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 260,
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
                      "text": "mapCoordsToPixel",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L260C13"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 261,
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
                      "text": "renderTexture",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L261C7"
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
                      "text": "sfRenderTexture_Ptr",
                      "href": "docs/sf__graphics___spec.html#L98C9"
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
                  "number": 262,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "point",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L262C7"
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
                      "text": "Sf.System.Vector2.sfVector2f",
                      "href": "docs/sf__system__vector2___spec.html#L43C9"
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
                  "number": 263,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "view",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L263C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "          "
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
                      "text": "sfView_Ptr",
                      "href": "docs/sf__graphics___spec.html#L128C9"
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
                      "text": "Sf.System.Vector2.sfVector2i",
                      "href": "docs/sf__system__vector2___spec.html#L25C9"
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
                  "text": " Convert a point from world coordinates to texture coordinates\n"
                },
                {
                  "kind": "span",
                  "text": "This function finds the pixel of the render-texture that matches\n"
                },
                {
                  "kind": "span",
                  "text": "the given 2D point. In other words, it goes through the same process\n"
                },
                {
                  "kind": "span",
                  "text": "as the graphics card, to compute the final position of a rendered point.\n"
                },
                {
                  "kind": "span",
                  "text": "Initially, both coordinate systems (world units and target pixels)\n"
                },
                {
                  "kind": "span",
                  "text": "match perfectly. But if you define a custom view or resize your\n"
                },
                {
                  "kind": "span",
                  "text": "render-texture, this assertion is not true anymore, ie. a point\n"
                },
                {
                  "kind": "span",
                  "text": "located at (150, 75) in your 2D world may map to the pixel\n"
                },
                {
                  "kind": "span",
                  "text": "(10, 50) of your render-texture -- if the view is translated by (140, 25).\n"
                },
                {
                  "kind": "span",
                  "text": "This version uses a custom view for calculations, see the other\n"
                },
                {
                  "kind": "span",
                  "text": "overload of the function if you want to use the current view of the\n"
                },
                {
                  "kind": "span",
                  "text": "render-texture.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderTexture",
              "line": 261,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfRenderTexture_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L98C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render texture object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "point",
              "line": 262,
              "column": 7,
              "type": {
                "label": "Sf.System.Vector2.sfVector2f",
                "docHref": "docs/sf__system__vector2___spec.html#L43C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Point to convert\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "view",
              "line": 263,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfView_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L128C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "The view to use for converting the point\n"
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
                    "text": "The converted point, in target coordinates (pixels)\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "mapPixelToCoords",
          "qualifier": "",
          "line": 231,
          "column": 13,
          "src": "srcs/sf-graphics-rendertexture.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 231,
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
                      "text": "mapPixelToCoords",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L231C13"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 232,
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
                      "text": "renderTexture",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L232C7"
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
                      "text": "sfRenderTexture_Ptr",
                      "href": "docs/sf__graphics___spec.html#L98C9"
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
                  "number": 233,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "point",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L233C7"
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
                      "text": "Sf.System.Vector2.sfVector2i",
                      "href": "docs/sf__system__vector2___spec.html#L25C9"
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
                  "number": 234,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "view",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L234C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "          "
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
                      "text": "sfView_Ptr",
                      "href": "docs/sf__graphics___spec.html#L128C9"
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
                      "text": "Sf.System.Vector2.sfVector2f",
                      "href": "docs/sf__system__vector2___spec.html#L43C9"
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
                  "text": " Convert a point from texture coordinates to world coordinates\n"
                },
                {
                  "kind": "span",
                  "text": "This function finds the 2D position that matches the\n"
                },
                {
                  "kind": "span",
                  "text": "given pixel of the render-texture. In other words, it does\n"
                },
                {
                  "kind": "span",
                  "text": "the inverse of what the graphics card does, to find the\n"
                },
                {
                  "kind": "span",
                  "text": "initial position of a rendered pixel.\n"
                },
                {
                  "kind": "span",
                  "text": "Initially, both coordinate systems (world units and target pixels)\n"
                },
                {
                  "kind": "span",
                  "text": "match perfectly. But if you define a custom view or resize your\n"
                },
                {
                  "kind": "span",
                  "text": "render-texture, this assertion is not true anymore, ie. a point\n"
                },
                {
                  "kind": "span",
                  "text": "located at (10, 50) in your render-texture may map to the point\n"
                },
                {
                  "kind": "span",
                  "text": "(150, 75) in your 2D world -- if the view is translated by (140, 25).\n"
                },
                {
                  "kind": "span",
                  "text": "This version uses a custom view for calculations, see the other\n"
                },
                {
                  "kind": "span",
                  "text": "overload of the function if you want to use the current view of the\n"
                },
                {
                  "kind": "span",
                  "text": "render-texture.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderTexture",
              "line": 232,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfRenderTexture_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L98C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render texture object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "point",
              "line": 233,
              "column": 7,
              "type": {
                "label": "Sf.System.Vector2.sfVector2i",
                "docHref": "docs/sf__system__vector2___spec.html#L25C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Pixel to convert\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "view",
              "line": 234,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfView_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L128C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "The view to use for converting the point\n"
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
                    "text": "The converted point, in \"world\" units\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "popGLStates",
          "qualifier": "",
          "line": 381,
          "column": 14,
          "src": "srcs/sf-graphics-rendertexture.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 381,
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
                      "text": "popGLStates",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L381C14"
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
                      "text": "renderTexture",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L381C27"
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
                      "text": "sfRenderTexture_Ptr",
                      "href": "docs/sf__graphics___spec.html#L98C9"
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
                  "text": " Restore the previously saved OpenGL render states and matrices\n"
                },
                {
                  "kind": "span",
                  "text": "See the description of pushGLStates to get a detailed\n"
                },
                {
                  "kind": "span",
                  "text": "description of these functions.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderTexture",
              "line": 381,
              "column": 27,
              "type": {
                "label": "Sf.Graphics.sfRenderTexture_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L98C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render texture object\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "pushGLStates",
          "qualifier": "",
          "line": 370,
          "column": 14,
          "src": "srcs/sf-graphics-rendertexture.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 370,
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
                      "text": "pushGLStates",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L370C14"
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
                      "text": "renderTexture",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L370C28"
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
                      "text": "sfRenderTexture_Ptr",
                      "href": "docs/sf__graphics___spec.html#L98C9"
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
                  "text": " Save the current OpenGL render states and matrices\n"
                },
                {
                  "kind": "span",
                  "text": "This function can be used when you mix SFML drawing\n"
                },
                {
                  "kind": "span",
                  "text": "and direct OpenGL rendering. Combined with popGLStates,\n"
                },
                {
                  "kind": "span",
                  "text": "it ensures that:\n"
                },
                {
                  "kind": "html",
                  "html": "</br>&bull; ",
                  "children": [
                  ]
                },
                {
                  "kind": "span",
                  "text": " SFML's internal states are not messed up by your OpenGL code\n"
                },
                {
                  "kind": "html",
                  "html": "</br>&bull; ",
                  "children": [
                  ]
                },
                {
                  "kind": "span",
                  "text": " your OpenGL states are not modified by a call to a SFML function\n"
                },
                {
                  "kind": "span",
                  "text": "Note that this function is quite expensive: it saves all the\n"
                },
                {
                  "kind": "span",
                  "text": "possible OpenGL states and matrices, even the ones you\n"
                },
                {
                  "kind": "span",
                  "text": "don't care about. Therefore it should be used wisely.\n"
                },
                {
                  "kind": "span",
                  "text": "It is provided for convenience, but the best results will\n"
                },
                {
                  "kind": "span",
                  "text": "be achieved if you handle OpenGL states yourself (because\n"
                },
                {
                  "kind": "span",
                  "text": "you know which states have really changed, and need to be\n"
                },
                {
                  "kind": "span",
                  "text": "saved and restored). Take a look at the resetGLStates\n"
                },
                {
                  "kind": "span",
                  "text": "function if you do so.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderTexture",
              "line": 370,
              "column": 28,
              "type": {
                "label": "Sf.Graphics.sfRenderTexture_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L98C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render texture object\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "resetGLStates",
          "qualifier": "",
          "line": 395,
          "column": 14,
          "src": "srcs/sf-graphics-rendertexture.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 395,
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
                      "text": "resetGLStates",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L395C14"
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
                      "text": "renderTexture",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L395C29"
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
                      "text": "sfRenderTexture_Ptr",
                      "href": "docs/sf__graphics___spec.html#L98C9"
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
                  "text": " Reset the internal OpenGL states so that the target is ready for drawing\n"
                },
                {
                  "kind": "span",
                  "text": "This function can be used when you mix SFML drawing\n"
                },
                {
                  "kind": "span",
                  "text": "and direct OpenGL rendering, if you choose not to use\n"
                },
                {
                  "kind": "span",
                  "text": "pushGLStates/popGLStates. It makes sure that all OpenGL\n"
                },
                {
                  "kind": "span",
                  "text": "states needed by SFML are set, so that subsequent sfRenderTexture_draw*()\n"
                },
                {
                  "kind": "span",
                  "text": "calls will work as expected.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderTexture",
              "line": 395,
              "column": 29,
              "type": {
                "label": "Sf.Graphics.sfRenderTexture_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L98C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render texture object\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "setActive",
          "qualifier": "",
          "line": 102,
          "column": 13,
          "src": "srcs/sf-graphics-rendertexture.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 102,
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
                      "text": "setActive",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L102C13"
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
                      "text": "renderTexture",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L102C24"
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
                      "text": "sfRenderTexture_Ptr",
                      "href": "docs/sf__graphics___spec.html#L98C9"
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
                  "number": 103,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                       "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "active",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L103C24"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "        "
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
                      "text": "sfBool",
                      "href": "docs/sf___spec.html#L53C9"
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
                  "text": " Activate or deactivate a render texture as the current target for rendering\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderTexture",
              "line": 102,
              "column": 24,
              "type": {
                "label": "Sf.Graphics.sfRenderTexture_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L98C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render texture object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "active",
              "line": 103,
              "column": 24,
              "type": {
                "label": "Sf.sfBool",
                "docHref": "docs/sf___spec.html#L53C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "sfTrue to activate, sfFalse to deactivate\n"
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
                    "text": "True if operation was successful, false otherwise\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "setRepeated",
          "qualifier": "",
          "line": 441,
          "column": 14,
          "src": "srcs/sf-graphics-rendertexture.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 441,
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
                      "text": "setRepeated",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L441C14"
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
                      "text": "renderTexture",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L441C27"
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
                      "text": "sfRenderTexture_Ptr",
                      "href": "docs/sf__graphics___spec.html#L98C9"
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
                      "text": "repeated",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L441C64"
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
                      "text": "sfBool",
                      "href": "docs/sf___spec.html#L53C9"
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
                  "text": " Enable or disable texture repeating\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderTexture",
              "line": 441,
              "column": 27,
              "type": {
                "label": "Sf.Graphics.sfRenderTexture_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L98C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render texture object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "repeated",
              "line": 441,
              "column": 64,
              "type": {
                "label": "Sf.sfBool",
                "docHref": "docs/sf___spec.html#L53C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "sfTrue to enable repeating, sfFalse to disable it\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "setSmooth",
          "qualifier": "",
          "line": 422,
          "column": 14,
          "src": "srcs/sf-graphics-rendertexture.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 422,
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
                      "text": "setSmooth",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L422C14"
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
                      "text": "renderTexture",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L422C25"
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
                      "text": "sfRenderTexture_Ptr",
                      "href": "docs/sf__graphics___spec.html#L98C9"
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
                      "text": "smooth",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L422C62"
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
                      "text": "sfBool",
                      "href": "docs/sf___spec.html#L53C9"
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
                  "text": " Enable or disable the smooth filter on a render texture\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderTexture",
              "line": 422,
              "column": 25,
              "type": {
                "label": "Sf.Graphics.sfRenderTexture_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L98C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render texture object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "smooth",
              "line": 422,
              "column": 62,
              "type": {
                "label": "Sf.sfBool",
                "docHref": "docs/sf___spec.html#L53C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "sfTrue to enable smoothing, sfFalse to disable it\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "setView",
          "qualifier": "",
          "line": 159,
          "column": 14,
          "src": "srcs/sf-graphics-rendertexture.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 159,
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
                      "text": "setView",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L159C14"
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
                      "text": "renderTexture",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L159C23"
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
                      "text": "sfRenderTexture_Ptr",
                      "href": "docs/sf__graphics___spec.html#L98C9"
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
                  "number": 160,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "view",
                      "href": "docs/sf__graphics__rendertexture___spec.html#L160C23"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "          "
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
                      "text": "sfView_Ptr",
                      "href": "docs/sf__graphics___spec.html#L128C9"
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
                  "text": " Change the current active view of a render texture\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderTexture",
              "line": 159,
              "column": 23,
              "type": {
                "label": "Sf.Graphics.sfRenderTexture_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L98C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render texture object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "view",
              "line": 160,
              "column": 23,
              "type": {
                "label": "Sf.Graphics.sfView_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L128C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Pointer to the new view\n"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "label": "Subprograms"
    }
  ]
};