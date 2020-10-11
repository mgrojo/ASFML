GNATdoc.Documentation = {
  "label": "Sf.Graphics.RenderTexture",
  "summary": [
  ],
  "description": [
  ],
  "entities": [
    {
      "entities": [
        {
          "label": "sfRenderTexture_create",
          "line": 42,
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
                  "number": 42,
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
                      "text": "sfRenderTexture_create",
                      "href": "docs/sf.graphics.rendertexture.html#L42C13"
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
                      "text": "width",
                      "href": "docs/sf.graphics.rendertexture.html#L43C7"
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
                      "text": "unsigned"
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
                  "number": 44,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "height",
                      "href": "docs/sf.graphics.rendertexture.html#L44C7"
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
                      "text": "unsigned"
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
                  "number": 45,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "depthBuffer",
                      "href": "docs/sf.graphics.rendertexture.html#L45C7"
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
                      "text": "Sf.Config.sfBool",
                      "href": "docs/sf.config.html#L42C9"
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
                      "text": "sfRenderTexture_Ptr",
                      "href": "docs/sf.graphics.types.html#L46C9"
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
                  "text": "Construct a new render texture\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "width",
              "line": 43,
              "column": 7,
              "type": {
                "label": "unsigned"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Width of the render texture\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "height",
              "line": 44,
              "column": 7,
              "type": {
                "label": "unsigned"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Height of the render texture\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "depthBuffer",
              "line": 45,
              "column": 7,
              "type": {
                "label": "Sf.Config.sfBool",
                "docHref": "docs/sf.config.html#L42C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Do you want a depth-buffer attached? (useful only if you're doing 3D OpenGL on the rendertexture)\n"
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
                    "text": "A new sfRenderTexture object, or NULL if it failed\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "sfRenderTexture_destroy",
          "line": 53,
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
                  "number": 53,
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
                      "text": "sfRenderTexture_destroy",
                      "href": "docs/sf.graphics.rendertexture.html#L53C14"
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
                      "href": "docs/sf.graphics.rendertexture.html#L53C39"
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
                      "href": "docs/sf.graphics.types.html#L46C9"
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
                  "text": "Destroy an existing render texture\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderTexture",
              "line": 53,
              "column": 39,
              "type": {
                "label": "Sf.Graphics.Types.sfRenderTexture_Ptr",
                "docHref": "docs/sf.graphics.types.html#L46C9"
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
          "label": "sfRenderTexture_getSize",
          "line": 63,
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
                  "number": 63,
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
                      "text": "sfRenderTexture_getSize",
                      "href": "docs/sf.graphics.rendertexture.html#L63C13"
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
                      "href": "docs/sf.graphics.rendertexture.html#L63C38"
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
                      "href": "docs/sf.graphics.types.html#L46C9"
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
                      "text": "Sf.System.Vector2.sfVector2u",
                      "href": "docs/sf.system.vector2.html#L35C9"
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
                  "text": "Get the size of the rendering region of a render texture\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderTexture",
              "line": 63,
              "column": 38,
              "type": {
                "label": "Sf.Graphics.Types.sfRenderTexture_Ptr",
                "docHref": "docs/sf.graphics.types.html#L46C9"
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
          "label": "sfRenderTexture_setActive",
          "line": 74,
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
                  "number": 74,
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
                      "text": "sfRenderTexture_setActive",
                      "href": "docs/sf.graphics.rendertexture.html#L74C13"
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
                      "href": "docs/sf.graphics.rendertexture.html#L74C40"
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
                      "href": "docs/sf.graphics.types.html#L46C9"
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
                      "text": "active",
                      "href": "docs/sf.graphics.rendertexture.html#L74C77"
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
                      "text": "Sf.Config.sfBool",
                      "href": "docs/sf.config.html#L42C9"
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
                      "text": "Sf.Config.sfBool",
                      "href": "docs/sf.config.html#L42C9"
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
                  "text": "Activate or deactivate a render texture as the current target for rendering\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderTexture",
              "line": 74,
              "column": 40,
              "type": {
                "label": "Sf.Graphics.Types.sfRenderTexture_Ptr",
                "docHref": "docs/sf.graphics.types.html#L46C9"
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
              "line": 74,
              "column": 77,
              "type": {
                "label": "Sf.Config.sfBool",
                "docHref": "docs/sf.config.html#L42C9"
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
          "label": "sfRenderTexture_display",
          "line": 82,
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
                  "number": 82,
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
                      "text": "sfRenderTexture_display",
                      "href": "docs/sf.graphics.rendertexture.html#L82C14"
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
                      "href": "docs/sf.graphics.rendertexture.html#L82C39"
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
                      "href": "docs/sf.graphics.types.html#L46C9"
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
                  "text": "Update the contents of the target texture\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderTexture",
              "line": 82,
              "column": 39,
              "type": {
                "label": "Sf.Graphics.Types.sfRenderTexture_Ptr",
                "docHref": "docs/sf.graphics.types.html#L46C9"
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
          "label": "sfRenderTexture_clear",
          "line": 91,
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
                      "text": "sfRenderTexture_clear",
                      "href": "docs/sf.graphics.rendertexture.html#L91C14"
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
                      "href": "docs/sf.graphics.rendertexture.html#L91C37"
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
                      "href": "docs/sf.graphics.types.html#L46C9"
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
                      "text": "color",
                      "href": "docs/sf.graphics.rendertexture.html#L91C74"
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
                      "href": "docs/sf.graphics.color.html#L36C9"
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
                  "text": "Clear the rendertexture with the given color\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderTexture",
              "line": 91,
              "column": 37,
              "type": {
                "label": "Sf.Graphics.Types.sfRenderTexture_Ptr",
                "docHref": "docs/sf.graphics.types.html#L46C9"
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
              "line": 91,
              "column": 74,
              "type": {
                "label": "Sf.Graphics.Color.sfColor",
                "docHref": "docs/sf.graphics.color.html#L36C9"
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
          "label": "sfRenderTexture_setView",
          "line": 100,
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
                  "number": 100,
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
                      "text": "sfRenderTexture_setView",
                      "href": "docs/sf.graphics.rendertexture.html#L100C14"
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
                      "href": "docs/sf.graphics.rendertexture.html#L100C39"
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
                      "href": "docs/sf.graphics.types.html#L46C9"
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
                      "href": "docs/sf.graphics.rendertexture.html#L100C76"
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
                      "href": "docs/sf.graphics.types.html#L70C9"
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
                  "text": "Change the current active view of a render texture\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderTexture",
              "line": 100,
              "column": 39,
              "type": {
                "label": "Sf.Graphics.Types.sfRenderTexture_Ptr",
                "docHref": "docs/sf.graphics.types.html#L46C9"
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
              "line": 100,
              "column": 76,
              "type": {
                "label": "Sf.Graphics.Types.sfView_Ptr",
                "docHref": "docs/sf.graphics.types.html#L70C9"
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
        },
        {
          "label": "sfRenderTexture_getView",
          "line": 110,
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
                  "number": 110,
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
                      "text": "sfRenderTexture_getView",
                      "href": "docs/sf.graphics.rendertexture.html#L110C13"
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
                      "href": "docs/sf.graphics.rendertexture.html#L110C38"
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
                      "href": "docs/sf.graphics.types.html#L46C9"
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
                      "href": "docs/sf.graphics.types.html#L70C9"
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
                  "text": "Get the current active view of a render texture\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderTexture",
              "line": 110,
              "column": 38,
              "type": {
                "label": "Sf.Graphics.Types.sfRenderTexture_Ptr",
                "docHref": "docs/sf.graphics.types.html#L46C9"
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
          "label": "sfRenderTexture_getDefaultView",
          "line": 120,
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
                      "text": "sfRenderTexture_getDefaultView",
                      "href": "docs/sf.graphics.rendertexture.html#L120C13"
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
                      "href": "docs/sf.graphics.rendertexture.html#L120C45"
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
                      "href": "docs/sf.graphics.types.html#L46C9"
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
                      "href": "docs/sf.graphics.types.html#L70C9"
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
                  "text": "Get the default view of a render texture\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderTexture",
              "line": 120,
              "column": 45,
              "type": {
                "label": "Sf.Graphics.Types.sfRenderTexture_Ptr",
                "docHref": "docs/sf.graphics.types.html#L46C9"
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
          "label": "sfRenderTexture_getViewport",
          "line": 131,
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
                  "number": 131,
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
                      "text": "sfRenderTexture_getViewport",
                      "href": "docs/sf.graphics.rendertexture.html#L131C13"
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
                      "href": "docs/sf.graphics.rendertexture.html#L131C42"
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
                      "href": "docs/sf.graphics.types.html#L46C9"
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
                      "href": "docs/sf.graphics.rendertexture.html#L131C79"
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
                      "href": "docs/sf.graphics.types.html#L70C9"
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
                  "number": 132,
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
                      "href": "docs/sf.graphics.rect.html#L44C9"
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
                  "text": "Get the viewport of a view applied to this target\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderTexture",
              "line": 131,
              "column": 42,
              "type": {
                "label": "Sf.Graphics.Types.sfRenderTexture_Ptr",
                "docHref": "docs/sf.graphics.types.html#L46C9"
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
              "line": 131,
              "column": 79,
              "type": {
                "label": "Sf.Graphics.Types.sfView_Ptr",
                "docHref": "docs/sf.graphics.types.html#L70C9"
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
          "label": "sfRenderTexture_mapPixelToCoords",
          "line": 159,
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
                      "text": "sfRenderTexture_mapPixelToCoords",
                      "href": "docs/sf.graphics.rendertexture.html#L159C13"
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
                      "href": "docs/sf.graphics.rendertexture.html#L160C7"
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
                      "href": "docs/sf.graphics.types.html#L46C9"
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
                  "number": 161,
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
                      "href": "docs/sf.graphics.rendertexture.html#L161C7"
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
                      "text": "Sf.System.Vector2.sfVector2i",
                      "href": "docs/sf.system.vector2.html#L26C9"
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
                  "number": 162,
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
                      "href": "docs/sf.graphics.rendertexture.html#L162C7"
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
                      "href": "docs/sf.graphics.types.html#L70C9"
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
                      "href": "docs/sf.system.vector2.html#L44C9"
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
                  "text": "Convert a point from texture coordinates to world coordinates\n"
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
              "line": 160,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.Types.sfRenderTexture_Ptr",
                "docHref": "docs/sf.graphics.types.html#L46C9"
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
              "line": 161,
              "column": 7,
              "type": {
                "label": "Sf.System.Vector2.sfVector2i",
                "docHref": "docs/sf.system.vector2.html#L26C9"
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
              "line": 162,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.Types.sfView_Ptr",
                "docHref": "docs/sf.graphics.types.html#L70C9"
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
          "label": "sfRenderTexture_mapCoordsToPixel",
          "line": 188,
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
                  "number": 188,
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
                      "text": "sfRenderTexture_mapCoordsToPixel",
                      "href": "docs/sf.graphics.rendertexture.html#L188C13"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 189,
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
                      "href": "docs/sf.graphics.rendertexture.html#L189C7"
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
                      "href": "docs/sf.graphics.types.html#L46C9"
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
                  "number": 190,
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
                      "href": "docs/sf.graphics.rendertexture.html#L190C7"
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
                      "text": "Sf.System.Vector2.sfVector2f",
                      "href": "docs/sf.system.vector2.html#L44C9"
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
                  "number": 191,
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
                      "href": "docs/sf.graphics.rendertexture.html#L191C7"
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
                      "href": "docs/sf.graphics.types.html#L70C9"
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
                      "href": "docs/sf.system.vector2.html#L26C9"
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
                  "text": "Convert a point from world coordinates to texture coordinates\n"
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
              "line": 189,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.Types.sfRenderTexture_Ptr",
                "docHref": "docs/sf.graphics.types.html#L46C9"
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
              "line": 190,
              "column": 7,
              "type": {
                "label": "Sf.System.Vector2.sfVector2f",
                "docHref": "docs/sf.system.vector2.html#L44C9"
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
              "line": 191,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.Types.sfView_Ptr",
                "docHref": "docs/sf.graphics.types.html#L70C9"
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
          "label": "sfRenderTexture_drawSprite",
          "line": 201,
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
                  "number": 201,
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
                      "text": "sfRenderTexture_drawSprite",
                      "href": "docs/sf.graphics.rendertexture.html#L201C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 202,
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
                      "href": "docs/sf.graphics.rendertexture.html#L202C7"
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
                      "href": "docs/sf.graphics.types.html#L46C9"
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
                  "number": 203,
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
                      "href": "docs/sf.graphics.rendertexture.html#L203C7"
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
                      "href": "docs/sf.graphics.types.html#L70C9"
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
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "states",
                      "href": "docs/sf.graphics.rendertexture.html#L204C7"
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
                      "href": "docs/sf.graphics.renderstates.html#L34C9"
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
                  "text": "Draw a drawable object to the render-target\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderTexture",
              "line": 202,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.Types.sfRenderTexture_Ptr",
                "docHref": "docs/sf.graphics.types.html#L46C9"
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
              "line": 203,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.Types.sfView_Ptr",
                "docHref": "docs/sf.graphics.types.html#L70C9"
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
              "line": 204,
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
                      "text": "Render states to use for drawing (NULL to use the default states)\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "sfRenderTexture_drawText",
          "line": 206,
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
                  "number": 206,
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
                      "text": "sfRenderTexture_drawText",
                      "href": "docs/sf.graphics.rendertexture.html#L206C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 207,
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
                      "href": "docs/sf.graphics.rendertexture.html#L207C7"
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
                      "href": "docs/sf.graphics.types.html#L46C9"
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
                  "number": 208,
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
                      "href": "docs/sf.graphics.rendertexture.html#L208C7"
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
                      "href": "docs/sf.graphics.types.html#L58C9"
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
                  "number": 209,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "arg3",
                      "href": "docs/sf.graphics.rendertexture.html#L209C7"
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
                      "href": "docs/sf.graphics.renderstates.html#L34C9"
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
              "line": 207,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.Types.sfRenderTexture_Ptr",
                "docHref": "docs/sf.graphics.types.html#L46C9"
              },
              "description": [
              ]
            },
            {
              "label": "object",
              "line": 208,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.Types.sfText_Ptr",
                "docHref": "docs/sf.graphics.types.html#L58C9"
              },
              "description": [
              ]
            },
            {
              "label": "arg3",
              "line": 209,
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
          "label": "sfRenderTexture_drawShape",
          "line": 211,
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
                  "number": 211,
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
                      "text": "sfRenderTexture_drawShape",
                      "href": "docs/sf.graphics.rendertexture.html#L211C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 212,
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
                      "href": "docs/sf.graphics.rendertexture.html#L212C7"
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
                      "href": "docs/sf.graphics.types.html#L46C9"
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
                  "number": 213,
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
                      "href": "docs/sf.graphics.rendertexture.html#L213C7"
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
                      "href": "docs/sf.graphics.types.html#L52C9"
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
                  "number": 214,
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
                      "href": "docs/sf.graphics.rendertexture.html#L214C7"
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
                      "href": "docs/sf.graphics.renderstates.html#L34C9"
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
              "line": 212,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.Types.sfRenderTexture_Ptr",
                "docHref": "docs/sf.graphics.types.html#L46C9"
              },
              "description": [
              ]
            },
            {
              "label": "object",
              "line": 213,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.Types.sfShape_Ptr",
                "docHref": "docs/sf.graphics.types.html#L52C9"
              },
              "description": [
              ]
            },
            {
              "label": "states",
              "line": 214,
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
          "label": "sfRenderTexture_drawCircleShape",
          "line": 216,
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
                  "number": 216,
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
                      "text": "sfRenderTexture_drawCircleShape",
                      "href": "docs/sf.graphics.rendertexture.html#L216C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 217,
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
                      "href": "docs/sf.graphics.rendertexture.html#L217C7"
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
                      "href": "docs/sf.graphics.types.html#L46C9"
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
                  "number": 218,
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
                      "href": "docs/sf.graphics.rendertexture.html#L218C7"
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
                      "href": "docs/sf.graphics.types.html#L28C9"
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
                  "number": 219,
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
                      "href": "docs/sf.graphics.rendertexture.html#L219C7"
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
                      "href": "docs/sf.graphics.renderstates.html#L34C9"
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
              "line": 217,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.Types.sfRenderTexture_Ptr",
                "docHref": "docs/sf.graphics.types.html#L46C9"
              },
              "description": [
              ]
            },
            {
              "label": "object",
              "line": 218,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.Types.sfCircleShape_Ptr",
                "docHref": "docs/sf.graphics.types.html#L28C9"
              },
              "description": [
              ]
            },
            {
              "label": "states",
              "line": 219,
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
          "label": "sfRenderTexture_drawConvexShape",
          "line": 221,
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
                  "number": 221,
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
                      "text": "sfRenderTexture_drawConvexShape",
                      "href": "docs/sf.graphics.rendertexture.html#L221C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 222,
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
                      "href": "docs/sf.graphics.rendertexture.html#L222C7"
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
                      "href": "docs/sf.graphics.types.html#L46C9"
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
                  "number": 223,
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
                      "href": "docs/sf.graphics.rendertexture.html#L223C7"
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
                      "href": "docs/sf.graphics.types.html#L31C9"
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
                  "number": 224,
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
                      "href": "docs/sf.graphics.rendertexture.html#L224C7"
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
                      "href": "docs/sf.graphics.renderstates.html#L34C9"
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
              "line": 222,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.Types.sfRenderTexture_Ptr",
                "docHref": "docs/sf.graphics.types.html#L46C9"
              },
              "description": [
              ]
            },
            {
              "label": "object",
              "line": 223,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.Types.sfConvexShape_Ptr",
                "docHref": "docs/sf.graphics.types.html#L31C9"
              },
              "description": [
              ]
            },
            {
              "label": "states",
              "line": 224,
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
          "label": "sfRenderTexture_drawRectangleShape",
          "line": 226,
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
                  "number": 226,
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
                      "text": "sfRenderTexture_drawRectangleShape",
                      "href": "docs/sf.graphics.rendertexture.html#L226C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 227,
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
                      "href": "docs/sf.graphics.rendertexture.html#L227C7"
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
                      "href": "docs/sf.graphics.types.html#L46C9"
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
                  "number": 228,
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
                      "href": "docs/sf.graphics.rendertexture.html#L228C7"
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
                      "href": "docs/sf.graphics.types.html#L43C9"
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
                  "number": 229,
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
                      "href": "docs/sf.graphics.rendertexture.html#L229C7"
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
                      "href": "docs/sf.graphics.renderstates.html#L34C9"
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
              "line": 227,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.Types.sfRenderTexture_Ptr",
                "docHref": "docs/sf.graphics.types.html#L46C9"
              },
              "description": [
              ]
            },
            {
              "label": "object",
              "line": 228,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.Types.sfRectangleShape_Ptr",
                "docHref": "docs/sf.graphics.types.html#L43C9"
              },
              "description": [
              ]
            },
            {
              "label": "states",
              "line": 229,
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
          "label": "sfRenderTexture_drawVertexArray",
          "line": 231,
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
                      "text": "sfRenderTexture_drawVertexArray",
                      "href": "docs/sf.graphics.rendertexture.html#L231C14"
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
                      "href": "docs/sf.graphics.rendertexture.html#L232C7"
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
                      "href": "docs/sf.graphics.types.html#L46C9"
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
                      "text": "object",
                      "href": "docs/sf.graphics.rendertexture.html#L233C7"
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
                      "href": "docs/sf.graphics.types.html#L67C9"
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
                      "text": "states",
                      "href": "docs/sf.graphics.rendertexture.html#L234C7"
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
                      "href": "docs/sf.graphics.renderstates.html#L34C9"
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
              "line": 232,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.Types.sfRenderTexture_Ptr",
                "docHref": "docs/sf.graphics.types.html#L46C9"
              },
              "description": [
              ]
            },
            {
              "label": "object",
              "line": 233,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.Types.sfVertexArray_Ptr",
                "docHref": "docs/sf.graphics.types.html#L67C9"
              },
              "description": [
              ]
            },
            {
              "label": "states",
              "line": 234,
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
          "label": "sfRenderTexture_drawPrimitives",
          "line": 246,
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
                  "number": 246,
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
                      "text": "sfRenderTexture_drawPrimitives",
                      "href": "docs/sf.graphics.rendertexture.html#L246C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 247,
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
                      "href": "docs/sf.graphics.rendertexture.html#L247C7"
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
                      "href": "docs/sf.graphics.types.html#L46C9"
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
                  "number": 248,
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
                      "href": "docs/sf.graphics.rendertexture.html#L248C7"
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
                      "href": "docs/sf.graphics.vertex.html#L30C9"
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
                  "number": 249,
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
                      "href": "docs/sf.graphics.rendertexture.html#L249C7"
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
                      "text": "size_t"
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
                  "number": 250,
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
                      "href": "docs/sf.graphics.rendertexture.html#L250C7"
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
                      "href": "docs/sf.graphics.primitivetype.html#L40C12"
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
                  "number": 251,
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
                      "href": "docs/sf.graphics.rendertexture.html#L251C7"
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
                      "href": "docs/sf.graphics.renderstates.html#L34C9"
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
                  "text": "Draw primitives defined by an array of vertices to a render texture\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderTexture",
              "line": 247,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.Types.sfRenderTexture_Ptr",
                "docHref": "docs/sf.graphics.types.html#L46C9"
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
              "line": 248,
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
              "line": 249,
              "column": 7,
              "type": {
                "label": "size_t"
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
              "line": 250,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.PrimitiveType.sfPrimitiveType",
                "docHref": "docs/sf.graphics.primitivetype.html#L40C12"
              },
              "description": [
              ]
            },
            {
              "label": "states",
              "line": 251,
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
                      "text": "Render states to use for drawing (NULL to use the default states)\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "sfRenderTexture_pushGLStates",
          "line": 274,
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
                  "number": 274,
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
                      "text": "sfRenderTexture_pushGLStates",
                      "href": "docs/sf.graphics.rendertexture.html#L274C14"
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
                      "href": "docs/sf.graphics.rendertexture.html#L274C44"
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
                      "href": "docs/sf.graphics.types.html#L46C9"
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
                  "text": "Save the current OpenGL render states and matrices\n"
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
                  "text": "it ensures that:@liSFML's internal states are not messed up by your OpenGL code@liyour OpenGL states are not modified by a call to a SFML function\n"
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
              "line": 274,
              "column": 44,
              "type": {
                "label": "Sf.Graphics.Types.sfRenderTexture_Ptr",
                "docHref": "docs/sf.graphics.types.html#L46C9"
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
          "label": "sfRenderTexture_popGLStates",
          "line": 285,
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
                  "number": 285,
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
                      "text": "sfRenderTexture_popGLStates",
                      "href": "docs/sf.graphics.rendertexture.html#L285C14"
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
                      "href": "docs/sf.graphics.rendertexture.html#L285C43"
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
                      "href": "docs/sf.graphics.types.html#L46C9"
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
                  "text": "Restore the previously saved OpenGL render states and matrices\n"
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
              "line": 285,
              "column": 43,
              "type": {
                "label": "Sf.Graphics.Types.sfRenderTexture_Ptr",
                "docHref": "docs/sf.graphics.types.html#L46C9"
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
          "label": "sfRenderTexture_resetGLStates",
          "line": 299,
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
                  "number": 299,
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
                      "text": "sfRenderTexture_resetGLStates",
                      "href": "docs/sf.graphics.rendertexture.html#L299C14"
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
                      "href": "docs/sf.graphics.rendertexture.html#L299C45"
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
                      "href": "docs/sf.graphics.types.html#L46C9"
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
                  "text": "Reset the internal OpenGL states so that the target is ready for drawing\n"
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
              "line": 299,
              "column": 45,
              "type": {
                "label": "Sf.Graphics.Types.sfRenderTexture_Ptr",
                "docHref": "docs/sf.graphics.types.html#L46C9"
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
          "label": "sfRenderTexture_getTexture",
          "line": 309,
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
                  "number": 309,
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
                      "text": "sfRenderTexture_getTexture",
                      "href": "docs/sf.graphics.rendertexture.html#L309C13"
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
                      "href": "docs/sf.graphics.rendertexture.html#L309C41"
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
                      "href": "docs/sf.graphics.types.html#L46C9"
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
                      "href": "docs/sf.graphics.types.html#L61C9"
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
                  "text": "Get the target texture of a render texture\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderTexture",
              "line": 309,
              "column": 41,
              "type": {
                "label": "Sf.Graphics.Types.sfRenderTexture_Ptr",
                "docHref": "docs/sf.graphics.types.html#L46C9"
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
          "label": "sfRenderTexture_setSmooth",
          "line": 318,
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
                  "number": 318,
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
                      "text": "sfRenderTexture_setSmooth",
                      "href": "docs/sf.graphics.rendertexture.html#L318C14"
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
                      "href": "docs/sf.graphics.rendertexture.html#L318C41"
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
                      "href": "docs/sf.graphics.types.html#L46C9"
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
                      "href": "docs/sf.graphics.rendertexture.html#L318C78"
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
                      "text": "Sf.Config.sfBool",
                      "href": "docs/sf.config.html#L42C9"
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
                  "text": "Enable or disable the smooth filter on a render texture\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderTexture",
              "line": 318,
              "column": 41,
              "type": {
                "label": "Sf.Graphics.Types.sfRenderTexture_Ptr",
                "docHref": "docs/sf.graphics.types.html#L46C9"
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
              "line": 318,
              "column": 78,
              "type": {
                "label": "Sf.Config.sfBool",
                "docHref": "docs/sf.config.html#L42C9"
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
          "label": "sfRenderTexture_isSmooth",
          "line": 328,
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
                  "number": 328,
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
                      "text": "sfRenderTexture_isSmooth",
                      "href": "docs/sf.graphics.rendertexture.html#L328C13"
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
                      "href": "docs/sf.graphics.rendertexture.html#L328C39"
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
                      "href": "docs/sf.graphics.types.html#L46C9"
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
                      "text": "Sf.Config.sfBool",
                      "href": "docs/sf.config.html#L42C9"
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
                  "text": "Tell whether the smooth filter is enabled or not for a render texture\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderTexture",
              "line": 328,
              "column": 39,
              "type": {
                "label": "Sf.Graphics.Types.sfRenderTexture_Ptr",
                "docHref": "docs/sf.graphics.types.html#L46C9"
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
          "label": "sfRenderTexture_setRepeated",
          "line": 337,
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
                  "number": 337,
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
                      "text": "sfRenderTexture_setRepeated",
                      "href": "docs/sf.graphics.rendertexture.html#L337C14"
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
                      "href": "docs/sf.graphics.rendertexture.html#L337C43"
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
                      "href": "docs/sf.graphics.types.html#L46C9"
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
                      "href": "docs/sf.graphics.rendertexture.html#L337C80"
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
                      "text": "Sf.Config.sfBool",
                      "href": "docs/sf.config.html#L42C9"
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
                  "text": "Enable or disable texture repeating\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderTexture",
              "line": 337,
              "column": 43,
              "type": {
                "label": "Sf.Graphics.Types.sfRenderTexture_Ptr",
                "docHref": "docs/sf.graphics.types.html#L46C9"
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
              "line": 337,
              "column": 80,
              "type": {
                "label": "Sf.Config.sfBool",
                "docHref": "docs/sf.config.html#L42C9"
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
          "label": "sfRenderTexture_isRepeated",
          "line": 347,
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
                  "number": 347,
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
                      "text": "sfRenderTexture_isRepeated",
                      "href": "docs/sf.graphics.rendertexture.html#L347C13"
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
                      "href": "docs/sf.graphics.rendertexture.html#L347C41"
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
                      "href": "docs/sf.graphics.types.html#L46C9"
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
                      "text": "Sf.Config.sfBool",
                      "href": "docs/sf.config.html#L42C9"
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
                  "text": "Tell whether the texture is repeated or not\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderTexture",
              "line": 347,
              "column": 41,
              "type": {
                "label": "Sf.Graphics.Types.sfRenderTexture_Ptr",
                "docHref": "docs/sf.graphics.types.html#L46C9"
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
          "label": "sfRenderTexture_generateMipmap",
          "line": 363,
          "column": 12,
          "src": "srcs/sf-graphics-rendertexture.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 363,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "  "
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
                      "text": "sfRenderTexture_generateMipmap",
                      "href": "docs/sf.graphics.rendertexture.html#L363C12"
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
                      "href": "docs/sf.graphics.rendertexture.html#L363C44"
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
                      "href": "docs/sf.graphics.types.html#L46C9"
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
                  "number": 364,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "  "
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
                      "text": "Sf.Config.sfBool",
                      "href": "docs/sf.config.html#L42C9"
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
                  "text": "Generate a mipmap using the current texture data\n"
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
              "line": 363,
              "column": 44,
              "type": {
                "label": "Sf.Graphics.Types.sfRenderTexture_Ptr",
                "docHref": "docs/sf.graphics.types.html#L46C9"
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
        }
      ],
      "label": "Subprograms"
    }
  ]
};