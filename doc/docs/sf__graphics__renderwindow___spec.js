GNATdoc.Documentation = {
  "label": "Sf.Graphics.RenderWindow",
  "qualifier": "",
  "summary": [
  ],
  "description": [
  ],
  "entities": [
    {
      "entities": [
        {
          "label": "capture",
          "qualifier": "",
          "line": 635,
          "column": 13,
          "src": "srcs/sf-graphics-renderwindow.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 635,
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
                      "text": "capture",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L635C13"
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
                      "text": "renderWindow",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L635C22"
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
                      "text": "sfRenderWindow_Ptr",
                      "href": "docs/sf__graphics___spec.html#L50C9"
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
                      "text": "sfImage_Ptr",
                      "href": "docs/sf__graphics___spec.html#L38C9"
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
                  "text": " Copy the current contents of the window to an image\n"
                },
                {
                  "kind": "html",
                  "html": "<br/><br/><span class=\"danger\">Deprecated!</span> ",
                  "children": [
                  ]
                },
                {
                  "kind": "span",
                  "text": "Use a sfTexture and its\n"
                },
                {
                  "kind": "span",
                  "text": "sfTexture_updateFromRenderWindow(sfTexture*, const sfRenderWindow*, sfUint32 int, sfUint32 int)\n"
                },
                {
                  "kind": "span",
                  "text": "function and copy its contents into an sfImage instead.\n"
                },
                {
                  "kind": "html",
                  "html": "",
                  "children": [
                  ]
                }
              ]
            },
            {
              "kind": "code",
              "children": [
                {
                  "number": 1,
                  "children": [
                    {
                      "kind": "span",
                      "text": "sfVector2u windowSize = sfRenderWindow_getSize(window);"
                    }
                  ]
                },
                {
                  "number": 2,
                  "children": [
                    {
                      "kind": "span",
                      "text": "sfTexture* texture = sfTexture_create(windowSize.x, windowSize.y);"
                    }
                  ]
                },
                {
                  "number": 3,
                  "children": [
                    {
                      "kind": "span",
                      "text": "sfTexture_updateFromRenderWindow(texture, window, windowSize.x, windowSize.y);"
                    }
                  ]
                },
                {
                  "number": 4,
                  "children": [
                    {
                      "kind": "span",
                      "text": "sfImage* screenshot = sfTexture_copyToImage(texture);"
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
                  "text": "This is a slow operation, whose main purpose is to make\n"
                },
                {
                  "kind": "span",
                  "text": "screenshots of the application. If you want to update an\n"
                },
                {
                  "kind": "span",
                  "text": "image with the contents of the window and then use it for\n"
                },
                {
                  "kind": "span",
                  "text": "drawing, you should rather use a sfTexture and the\n"
                },
                {
                  "kind": "span",
                  "text": "sfTexture_updateFromWindow(sfTexture*, const sfWindow*, sfUint32 int, sfUint32 int) function.\n"
                },
                {
                  "kind": "span",
                  "text": "You can also draw things directly to a texture with the\n"
                },
                {
                  "kind": "span",
                  "text": "sfRenderTexture class.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderWindow",
              "line": 635,
              "column": 22,
              "type": {
                "label": "Sf.Graphics.sfRenderWindow_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L50C9"
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
                    "text": "sfImage containing the captured contents.\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "clear",
          "qualifier": "",
          "line": 378,
          "column": 14,
          "src": "srcs/sf-graphics-renderwindow.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 378,
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
                      "href": "docs/sf__graphics__renderwindow___spec.html#L378C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 379,
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
                      "text": "renderWindow",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L379C7"
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
                      "text": "sfRenderWindow_Ptr",
                      "href": "docs/sf__graphics___spec.html#L50C9"
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
                  "number": 380,
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
                      "href": "docs/sf__graphics__renderwindow___spec.html#L380C7"
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
                      "text": "Sf.Graphics.Color.sfColor",
                      "href": "docs/sf__graphics__color___spec.html#L33C9"
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
                      "cssClass": "identifier",
                      "text": "Sf.Graphics.Color.sfBlack",
                      "href": "docs/sf__graphics__color___spec.html#L44C4"
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
                  "text": " Clear a render window with the given color\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderWindow",
              "line": 379,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfRenderWindow_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L50C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render window object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "color",
              "line": 380,
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
                      "text": "Fill color\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "close",
          "qualifier": "",
          "line": 96,
          "column": 14,
          "src": "srcs/sf-graphics-renderwindow.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 96,
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
                      "text": "close",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L96C14"
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
                      "text": "renderWindow",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L96C21"
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
                      "text": "sfRenderWindow_Ptr",
                      "href": "docs/sf__graphics___spec.html#L50C9"
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
                  "text": " Close a render window (but doesn't destroy the internal data)\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderWindow",
              "line": 96,
              "column": 21,
              "type": {
                "label": "Sf.Graphics.sfRenderWindow_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L50C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render window to close\n"
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
          "line": 45,
          "column": 13,
          "src": "srcs/sf-graphics-renderwindow.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 45,
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
                      "href": "docs/sf__graphics__renderwindow___spec.html#L45C13"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 46,
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
                      "text": "mode",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L46C7"
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
                      "cssClass": "identifier",
                      "text": "Sf.Window.VideoMode.sfVideoMode",
                      "href": "docs/sf__window__videomode___spec.html#L27C9"
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
                  "number": 47,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "title",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L47C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "    "
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
                      "text": "Standard.String"
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
                  "number": 48,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "style",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L48C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "    "
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
                      "text": "Sf.Window.Window.sfWindowStyle",
                      "href": "docs/sf__window__window___spec.html#L25C9"
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
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 49,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "        "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Sf.Window.Window.sfResize"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "or"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Sf.Window.Window.sfClose"
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
                  "number": 50,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "settings",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L50C7"
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
                      "text": "Sf.Window.Window.sfContextSettings",
                      "href": "docs/sf__window__window___spec.html#L51C9"
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
                      "cssClass": "identifier",
                      "text": "Sf.Window.Window.sfDefaultContextSettings",
                      "href": "docs/sf__window__window___spec.html#L507C4"
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
                  "number": 51,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
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
                      "text": "sfRenderWindow_Ptr",
                      "href": "docs/sf__graphics___spec.html#L50C9"
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
                  "text": " Construct a new render window\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "mode",
              "line": 46,
              "column": 7,
              "type": {
                "label": "Sf.Window.VideoMode.sfVideoMode",
                "docHref": "docs/sf__window__videomode___spec.html#L27C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Video mode to use\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "title",
              "line": 47,
              "column": 7,
              "type": {
                "label": "String"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Title of the window\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "style",
              "line": 48,
              "column": 7,
              "type": {
                "label": "Sf.Window.Window.sfWindowStyle",
                "docHref": "docs/sf__window__window___spec.html#L25C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Window style\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "settings",
              "line": 50,
              "column": 7,
              "type": {
                "label": "Sf.Window.Window.sfContextSettings",
                "docHref": "docs/sf__window__window___spec.html#L51C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Creation settings\n"
                    }
                  ]
                }
              ]
            }
          ],
          "returns": {
            "description": [
            ]
          }
        },
        {
          "label": "createFromHandle",
          "qualifier": "",
          "line": 78,
          "column": 13,
          "src": "srcs/sf-graphics-renderwindow.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 78,
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
                      "text": "createFromHandle",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L78C13"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 79,
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
                      "text": "handle",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L79C7"
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
                      "text": "Sf.Window.WindowHandle.sfWindowHandle",
                      "href": "docs/sf__window__windowhandle___spec.html#L24C9"
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
                  "number": 80,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "settings",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L80C7"
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
                      "href": "docs/sf__window__window___spec.html#L51C9"
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
                      "text": "sfRenderWindow_Ptr",
                      "href": "docs/sf__graphics___spec.html#L50C9"
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
                  "text": " Construct a render window from an existing control\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "handle",
              "line": 79,
              "column": 7,
              "type": {
                "label": "Sf.Window.WindowHandle.sfWindowHandle",
                "docHref": "docs/sf__window__windowhandle___spec.html#L24C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Platform-specific handle of the control\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "settings",
              "line": 80,
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
                      "text": "Creation settings (pass NULL to use default values)\n"
                    }
                  ]
                }
              ]
            }
          ],
          "returns": {
            "description": [
            ]
          }
        },
        {
          "label": "createUnicode",
          "qualifier": "",
          "line": 63,
          "column": 13,
          "src": "srcs/sf-graphics-renderwindow.ads.html",
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
                      "text": "createUnicode",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L63C13"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 64,
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
                      "text": "mode",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L64C7"
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
                      "cssClass": "identifier",
                      "text": "Sf.Window.VideoMode.sfVideoMode",
                      "href": "docs/sf__window__videomode___spec.html#L27C9"
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
                  "number": 65,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "title",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L65C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "    "
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
                      "text": "Wide_Wide_String"
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
                  "number": 66,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "style",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L66C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "    "
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
                      "text": "Sf.Window.Window.sfWindowStyle",
                      "href": "docs/sf__window__window___spec.html#L25C9"
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
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 67,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "        "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Sf.Window.Window.sfResize"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "or"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Sf.Window.Window.sfClose"
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
                  "number": 68,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "settings",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L68C7"
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
                      "text": "Sf.Window.Window.sfContextSettings",
                      "href": "docs/sf__window__window___spec.html#L51C9"
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
                      "cssClass": "identifier",
                      "text": "Sf.Window.Window.sfDefaultContextSettings",
                      "href": "docs/sf__window__window___spec.html#L507C4"
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
                  "number": 69,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
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
                      "text": "sfRenderWindow_Ptr",
                      "href": "docs/sf__graphics___spec.html#L50C9"
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
                  "text": " Construct a new render window (with a UTF-32 title)\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "mode",
              "line": 64,
              "column": 7,
              "type": {
                "label": "Sf.Window.VideoMode.sfVideoMode",
                "docHref": "docs/sf__window__videomode___spec.html#L27C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Video mode to use\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "title",
              "line": 65,
              "column": 7,
              "type": {
                "label": "Wide_Wide_String"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Title of the window (UTF-32)\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "style",
              "line": 66,
              "column": 7,
              "type": {
                "label": "Sf.Window.Window.sfWindowStyle",
                "docHref": "docs/sf__window__window___spec.html#L25C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Window style\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "settings",
              "line": 68,
              "column": 7,
              "type": {
                "label": "Sf.Window.Window.sfContextSettings",
                "docHref": "docs/sf__window__window___spec.html#L51C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Creation settings (pass NULL to use default values)\n"
                    }
                  ]
                }
              ]
            }
          ],
          "returns": {
            "description": [
            ]
          }
        },
        {
          "label": "destroy",
          "qualifier": "",
          "line": 88,
          "column": 14,
          "src": "srcs/sf-graphics-renderwindow.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 88,
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
                      "href": "docs/sf__graphics__renderwindow___spec.html#L88C14"
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
                      "text": "renderWindow",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L88C23"
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
                      "text": "sfRenderWindow_Ptr",
                      "href": "docs/sf__graphics___spec.html#L50C9"
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
                  "text": " Destroy an existing render window\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderWindow",
              "line": 88,
              "column": 23,
              "type": {
                "label": "Sf.Graphics.sfRenderWindow_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L50C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render window to destroy\n"
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
          "line": 359,
          "column": 14,
          "src": "srcs/sf-graphics-renderwindow.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 359,
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
                      "href": "docs/sf__graphics__renderwindow___spec.html#L359C14"
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
                      "text": "renderWindow",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L359C23"
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
                      "text": "sfRenderWindow_Ptr",
                      "href": "docs/sf__graphics___spec.html#L50C9"
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
                  "text": " Display a render window on screen\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderWindow",
              "line": 359,
              "column": 23,
              "type": {
                "label": "Sf.Graphics.sfRenderWindow_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L50C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render window object\n"
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
          "line": 507,
          "column": 14,
          "src": "srcs/sf-graphics-renderwindow.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 507,
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
                      "href": "docs/sf__graphics__renderwindow___spec.html#L507C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 508,
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
                      "text": "renderWindow",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L508C7"
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
                      "text": "sfRenderWindow_Ptr",
                      "href": "docs/sf__graphics___spec.html#L50C9"
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
                  "number": 509,
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
                      "href": "docs/sf__graphics__renderwindow___spec.html#L509C7"
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
                      "text": "sfCircleShape_Ptr",
                      "href": "docs/sf__graphics___spec.html#L29C9"
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
                  "number": 510,
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
                      "href": "docs/sf__graphics__renderwindow___spec.html#L510C7"
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
                      "text": "Sf.Graphics.RenderStates.sfRenderStates_Ptr",
                      "href": "docs/sf__graphics__renderstates___spec.html#L39C9"
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
              "label": "renderWindow",
              "line": 508,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfRenderWindow_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L50C9"
              },
              "description": [
              ]
            },
            {
              "label": "object",
              "line": 509,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfCircleShape_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L29C9"
              },
              "description": [
              ]
            },
            {
              "label": "states",
              "line": 510,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.RenderStates.sfRenderStates_Ptr",
                "docHref": "docs/sf__graphics__renderstates___spec.html#L39C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "drawConvexShape",
          "qualifier": "",
          "line": 511,
          "column": 14,
          "src": "srcs/sf-graphics-renderwindow.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 511,
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
                      "href": "docs/sf__graphics__renderwindow___spec.html#L511C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 512,
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
                      "text": "renderWindow",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L512C7"
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
                      "text": "sfRenderWindow_Ptr",
                      "href": "docs/sf__graphics___spec.html#L50C9"
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
                  "number": 513,
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
                      "href": "docs/sf__graphics__renderwindow___spec.html#L513C7"
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
                      "text": "sfConvexShape_Ptr",
                      "href": "docs/sf__graphics___spec.html#L32C9"
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
                  "number": 514,
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
                      "href": "docs/sf__graphics__renderwindow___spec.html#L514C7"
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
                      "text": "Sf.Graphics.RenderStates.sfRenderStates_Ptr",
                      "href": "docs/sf__graphics__renderstates___spec.html#L39C9"
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
              "label": "renderWindow",
              "line": 512,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfRenderWindow_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L50C9"
              },
              "description": [
              ]
            },
            {
              "label": "object",
              "line": 513,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfConvexShape_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L32C9"
              },
              "description": [
              ]
            },
            {
              "label": "states",
              "line": 514,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.RenderStates.sfRenderStates_Ptr",
                "docHref": "docs/sf__graphics__renderstates___spec.html#L39C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "drawPrimitives",
          "qualifier": "",
          "line": 555,
          "column": 14,
          "src": "srcs/sf-graphics-renderwindow.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 555,
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
                      "href": "docs/sf__graphics__renderwindow___spec.html#L555C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 556,
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
                      "text": "renderWindow",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L556C7"
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
                      "text": "sfRenderWindow_Ptr",
                      "href": "docs/sf__graphics___spec.html#L50C9"
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
                  "number": 557,
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
                      "href": "docs/sf__graphics__renderwindow___spec.html#L557C7"
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
                  "number": 558,
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
                      "href": "docs/sf__graphics__renderwindow___spec.html#L558C7"
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
                  "number": 559,
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
                      "href": "docs/sf__graphics__renderwindow___spec.html#L559C7"
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
                  "number": 560,
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
                      "href": "docs/sf__graphics__renderwindow___spec.html#L560C7"
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
                  "text": " Draw primitives defined by an array of vertices to a render window\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderWindow",
              "line": 556,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfRenderWindow_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L50C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "render window object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "vertices",
              "line": 557,
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
              "line": 558,
              "column": 7,
              "type": {
                "label": "Sf.sfSize_t",
                "docHref": "docs/sf___spec.html#L108C9"
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
              "line": 559,
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
                      "text": "Type of primitives to draw\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "states",
              "line": 560,
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
          "label": "drawRectangleShape",
          "qualifier": "",
          "line": 515,
          "column": 14,
          "src": "srcs/sf-graphics-renderwindow.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 515,
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
                      "href": "docs/sf__graphics__renderwindow___spec.html#L515C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 516,
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
                      "text": "renderWindow",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L516C7"
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
                      "text": "sfRenderWindow_Ptr",
                      "href": "docs/sf__graphics___spec.html#L50C9"
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
                  "number": 517,
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
                      "href": "docs/sf__graphics__renderwindow___spec.html#L517C7"
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
                      "text": "sfRectangleShape_Ptr",
                      "href": "docs/sf__graphics___spec.html#L44C9"
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
                  "number": 518,
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
                      "href": "docs/sf__graphics__renderwindow___spec.html#L518C7"
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
                      "text": "Sf.Graphics.RenderStates.sfRenderStates_Ptr",
                      "href": "docs/sf__graphics__renderstates___spec.html#L39C9"
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
              "label": "renderWindow",
              "line": 516,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfRenderWindow_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L50C9"
              },
              "description": [
              ]
            },
            {
              "label": "object",
              "line": 517,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfRectangleShape_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L44C9"
              },
              "description": [
              ]
            },
            {
              "label": "states",
              "line": 518,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.RenderStates.sfRenderStates_Ptr",
                "docHref": "docs/sf__graphics__renderstates___spec.html#L39C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "drawShape",
          "qualifier": "",
          "line": 503,
          "column": 14,
          "src": "srcs/sf-graphics-renderwindow.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 503,
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
                      "href": "docs/sf__graphics__renderwindow___spec.html#L503C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 504,
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
                      "text": "renderWindow",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L504C7"
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
                      "text": "sfRenderWindow_Ptr",
                      "href": "docs/sf__graphics___spec.html#L50C9"
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
                  "number": 505,
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
                      "href": "docs/sf__graphics__renderwindow___spec.html#L505C7"
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
                      "text": "sfShape_Ptr",
                      "href": "docs/sf__graphics___spec.html#L53C9"
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
                  "number": 506,
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
                      "href": "docs/sf__graphics__renderwindow___spec.html#L506C7"
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
                      "text": "Sf.Graphics.RenderStates.sfRenderStates_Ptr",
                      "href": "docs/sf__graphics__renderstates___spec.html#L39C9"
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
              "label": "renderWindow",
              "line": 504,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfRenderWindow_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L50C9"
              },
              "description": [
              ]
            },
            {
              "label": "object",
              "line": 505,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfShape_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L53C9"
              },
              "description": [
              ]
            },
            {
              "label": "states",
              "line": 506,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.RenderStates.sfRenderStates_Ptr",
                "docHref": "docs/sf__graphics__renderstates___spec.html#L39C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "drawSprite",
          "qualifier": "",
          "line": 495,
          "column": 14,
          "src": "srcs/sf-graphics-renderwindow.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 495,
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
                      "href": "docs/sf__graphics__renderwindow___spec.html#L495C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 496,
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
                      "text": "renderWindow",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L496C7"
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
                      "text": "sfRenderWindow_Ptr",
                      "href": "docs/sf__graphics___spec.html#L50C9"
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
                  "number": 497,
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
                      "href": "docs/sf__graphics__renderwindow___spec.html#L497C7"
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
                      "text": "sfSprite_Ptr",
                      "href": "docs/sf__graphics___spec.html#L56C9"
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
                  "number": 498,
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
                      "href": "docs/sf__graphics__renderwindow___spec.html#L498C7"
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
                      "text": "Sf.Graphics.RenderStates.sfRenderStates_Ptr",
                      "href": "docs/sf__graphics__renderstates___spec.html#L39C9"
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
              "label": "renderWindow",
              "line": 496,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfRenderWindow_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L50C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "render window object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "object",
              "line": 497,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfSprite_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L56C9"
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
              "line": 498,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.RenderStates.sfRenderStates_Ptr",
                "docHref": "docs/sf__graphics__renderstates___spec.html#L39C9"
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
          "label": "drawText",
          "qualifier": "",
          "line": 499,
          "column": 14,
          "src": "srcs/sf-graphics-renderwindow.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 499,
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
                      "href": "docs/sf__graphics__renderwindow___spec.html#L499C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 500,
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
                      "text": "renderWindow",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L500C7"
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
                      "text": "sfRenderWindow_Ptr",
                      "href": "docs/sf__graphics___spec.html#L50C9"
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
                  "number": 501,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "text",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L501C7"
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
                      "text": "sfText_Ptr",
                      "href": "docs/sf__graphics___spec.html#L59C9"
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
                  "number": 502,
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
                      "href": "docs/sf__graphics__renderwindow___spec.html#L502C7"
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
                      "text": "Sf.Graphics.RenderStates.sfRenderStates_Ptr",
                      "href": "docs/sf__graphics__renderstates___spec.html#L39C9"
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
              "label": "renderWindow",
              "line": 500,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfRenderWindow_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L50C9"
              },
              "description": [
              ]
            },
            {
              "label": "text",
              "line": 501,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfText_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L59C9"
              },
              "description": [
              ]
            },
            {
              "label": "states",
              "line": 502,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.RenderStates.sfRenderStates_Ptr",
                "docHref": "docs/sf__graphics__renderstates___spec.html#L39C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "drawVertexArray",
          "qualifier": "",
          "line": 519,
          "column": 14,
          "src": "srcs/sf-graphics-renderwindow.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 519,
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
                      "href": "docs/sf__graphics__renderwindow___spec.html#L519C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 520,
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
                      "text": "renderWindow",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L520C7"
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
                      "text": "sfRenderWindow_Ptr",
                      "href": "docs/sf__graphics___spec.html#L50C9"
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
                  "number": 521,
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
                      "href": "docs/sf__graphics__renderwindow___spec.html#L521C7"
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
                      "text": "sfVertexArray_Ptr",
                      "href": "docs/sf__graphics___spec.html#L71C9"
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
                  "number": 522,
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
                      "href": "docs/sf__graphics__renderwindow___spec.html#L522C7"
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
                      "text": "Sf.Graphics.RenderStates.sfRenderStates_Ptr",
                      "href": "docs/sf__graphics__renderstates___spec.html#L39C9"
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
              "label": "renderWindow",
              "line": 520,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfRenderWindow_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L50C9"
              },
              "description": [
              ]
            },
            {
              "label": "object",
              "line": 521,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfVertexArray_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L71C9"
              },
              "description": [
              ]
            },
            {
              "label": "states",
              "line": 522,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.RenderStates.sfRenderStates_Ptr",
                "docHref": "docs/sf__graphics__renderstates___spec.html#L39C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "drawVertexBuffer",
          "qualifier": "",
          "line": 523,
          "column": 14,
          "src": "srcs/sf-graphics-renderwindow.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 523,
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
                      "href": "docs/sf__graphics__renderwindow___spec.html#L523C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 524,
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
                      "text": "renderWindow",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L524C7"
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
                      "text": "sfRenderWindow_Ptr",
                      "href": "docs/sf__graphics___spec.html#L50C9"
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
                  "number": 525,
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
                      "href": "docs/sf__graphics__renderwindow___spec.html#L525C7"
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
                  "number": 526,
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
                      "href": "docs/sf__graphics__renderwindow___spec.html#L526C7"
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
                      "text": "Sf.Graphics.RenderStates.sfRenderStates_Ptr",
                      "href": "docs/sf__graphics__renderstates___spec.html#L39C9"
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
              "label": "renderWindow",
              "line": 524,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfRenderWindow_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L50C9"
              },
              "description": [
              ]
            },
            {
              "label": "object",
              "line": 525,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfVertexBuffer_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L74C9"
              },
              "description": [
              ]
            },
            {
              "label": "states",
              "line": 526,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.RenderStates.sfRenderStates_Ptr",
                "docHref": "docs/sf__graphics__renderstates___spec.html#L39C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "drawVertexBufferRange",
          "qualifier": "",
          "line": 538,
          "column": 14,
          "src": "srcs/sf-graphics-renderwindow.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 538,
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
                      "text": "drawVertexBufferRange",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L538C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 539,
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
                      "text": "renderWindow",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L539C7"
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
                      "text": "sfRenderWindow_Ptr",
                      "href": "docs/sf__graphics___spec.html#L50C9"
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
                  "number": 540,
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
                      "href": "docs/sf__graphics__renderwindow___spec.html#L540C7"
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
                      "text": "Sf.Graphics.sfVertexBuffer",
                      "href": "docs/sf__graphics___spec.html#L73C9"
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
                  "number": 541,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "firstVertex",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L541C7"
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
                  "number": 542,
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
                      "href": "docs/sf__graphics__renderwindow___spec.html#L542C7"
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
                  "number": 543,
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
                      "href": "docs/sf__graphics__renderwindow___spec.html#L543C7"
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
                      "text": "Sf.Graphics.RenderStates.sfRenderStates_Ptr",
                      "href": "docs/sf__graphics__renderstates___spec.html#L39C9"
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
              "label": "renderWindow",
              "line": 539,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfRenderWindow_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L50C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "render window object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "object",
              "line": 540,
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
                      "text": "Vertex buffer object to draw\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "firstVertex",
              "line": 541,
              "column": 7,
              "type": {
                "label": "Sf.sfSize_t",
                "docHref": "docs/sf___spec.html#L108C9"
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
              "line": 542,
              "column": 7,
              "type": {
                "label": "Sf.sfSize_t",
                "docHref": "docs/sf___spec.html#L108C9"
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
              "line": 543,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.RenderStates.sfRenderStates_Ptr",
                "docHref": "docs/sf__graphics__renderstates___spec.html#L39C9"
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
          "label": "getDefaultView",
          "qualifier": "",
          "line": 411,
          "column": 13,
          "src": "srcs/sf-graphics-renderwindow.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 411,
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
                      "href": "docs/sf__graphics__renderwindow___spec.html#L411C13"
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
                      "text": "renderWindow",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L411C29"
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
                      "text": "sfRenderWindow_Ptr",
                      "href": "docs/sf__graphics___spec.html#L50C9"
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
                      "href": "docs/sf__graphics___spec.html#L77C9"
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
                  "text": " Get the default view of a render window\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderWindow",
              "line": 411,
              "column": 29,
              "type": {
                "label": "Sf.Graphics.sfRenderWindow_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L50C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render window object\n"
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
                    "text": "Default view of the render window\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "getPosition",
          "qualifier": "",
          "line": 148,
          "column": 13,
          "src": "srcs/sf-graphics-renderwindow.ads.html",
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
                      "text": "getPosition",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L148C13"
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
                      "text": "renderWindow",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L148C26"
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
                      "text": "sfRenderWindow_Ptr",
                      "href": "docs/sf__graphics___spec.html#L50C9"
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
                  "text": " Get the position of a render window\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderWindow",
              "line": 148,
              "column": 26,
              "type": {
                "label": "Sf.Graphics.sfRenderWindow_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L50C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render window object\n"
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
                    "text": "Position in pixels\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "getSettings",
          "qualifier": "",
          "line": 114,
          "column": 13,
          "src": "srcs/sf-graphics-renderwindow.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 114,
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
                      "text": "getSettings",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L114C13"
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
                      "text": "renderWindow",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L114C26"
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
                      "text": "sfRenderWindow_Ptr",
                      "href": "docs/sf__graphics___spec.html#L50C9"
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
                      "text": "Sf.Window.Window.sfContextSettings",
                      "href": "docs/sf__window__window___spec.html#L51C9"
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
                  "text": " Get the creation settings of a render window\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderWindow",
              "line": 114,
              "column": 26,
              "type": {
                "label": "Sf.Graphics.sfRenderWindow_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L50C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render window object\n"
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
                    "text": "Settings used to create the window\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "getSize",
          "qualifier": "",
          "line": 169,
          "column": 13,
          "src": "srcs/sf-graphics-renderwindow.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 169,
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
                      "href": "docs/sf__graphics__renderwindow___spec.html#L169C13"
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
                      "text": "renderWindow",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L169C22"
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
                      "text": "sfRenderWindow_Ptr",
                      "href": "docs/sf__graphics___spec.html#L50C9"
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
                  "text": " Get the size of the rendering region of a render window\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderWindow",
              "line": 169,
              "column": 22,
              "type": {
                "label": "Sf.Graphics.sfRenderWindow_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L50C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render window object\n"
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
          "label": "getSystemHandle",
          "qualifier": "",
          "line": 369,
          "column": 13,
          "src": "srcs/sf-graphics-renderwindow.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 369,
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
                      "text": "getSystemHandle",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L369C13"
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
                      "text": "renderWindow",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L369C30"
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
                      "text": "sfRenderWindow_Ptr",
                      "href": "docs/sf__graphics___spec.html#L50C9"
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
                      "text": "Sf.Window.WindowHandle.sfWindowHandle",
                      "href": "docs/sf__window__windowhandle___spec.html#L24C9"
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
                  "text": " Retrieve the OS-specific handle of a render window\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderWindow",
              "line": 369,
              "column": 30,
              "type": {
                "label": "Sf.Graphics.sfRenderWindow_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L50C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render window object\n"
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
                    "text": "Window handle\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "getView",
          "qualifier": "",
          "line": 401,
          "column": 13,
          "src": "srcs/sf-graphics-renderwindow.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 401,
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
                      "href": "docs/sf__graphics__renderwindow___spec.html#L401C13"
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
                      "text": "renderWindow",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L401C22"
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
                      "text": "sfRenderWindow_Ptr",
                      "href": "docs/sf__graphics___spec.html#L50C9"
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
                      "href": "docs/sf__graphics___spec.html#L77C9"
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
                  "text": " Get the current active view of a render window\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderWindow",
              "line": 401,
              "column": 22,
              "type": {
                "label": "Sf.Graphics.sfRenderWindow_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L50C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render window object\n"
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
          "line": 422,
          "column": 13,
          "src": "srcs/sf-graphics-renderwindow.ads.html",
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
                      "href": "docs/sf__graphics__renderwindow___spec.html#L422C13"
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
                      "text": "renderWindow",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L422C26"
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
                      "text": "sfRenderWindow_Ptr",
                      "href": "docs/sf__graphics___spec.html#L50C9"
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
                      "href": "docs/sf__graphics__renderwindow___spec.html#L422C61"
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
                      "href": "docs/sf__graphics___spec.html#L77C9"
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
                  "number": 423,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                        "
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
                      "href": "docs/sf__graphics__rect___spec.html#L35C9"
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
              "label": "renderWindow",
              "line": 422,
              "column": 26,
              "type": {
                "label": "Sf.Graphics.sfRenderWindow_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L50C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render window object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "view",
              "line": 422,
              "column": 61,
              "type": {
                "label": "Sf.Graphics.sfView_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L77C9"
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
          "label": "hasFocus",
          "qualifier": "",
          "line": 351,
          "column": 13,
          "src": "srcs/sf-graphics-renderwindow.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 351,
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
                      "text": "hasFocus",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L351C13"
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
                      "text": "renderWindow",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L351C23"
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
                      "text": "sfRenderWindow_Ptr",
                      "href": "docs/sf__graphics___spec.html#L50C9"
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
                      "href": "docs/sf___spec.html#L52C9"
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
                  "text": " Check whether the render window has the input focus\n"
                },
                {
                  "kind": "span",
                  "text": "At any given time, only one window may have the input focus\n"
                },
                {
                  "kind": "span",
                  "text": "to receive input events such as keystrokes or most mouse\n"
                },
                {
                  "kind": "span",
                  "text": "events.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderWindow",
              "line": 351,
              "column": 23,
              "type": {
                "label": "Sf.Graphics.sfRenderWindow_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L50C9"
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
                    "text": "True if window has focus, false otherwise\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "isOpen",
          "qualifier": "",
          "line": 104,
          "column": 13,
          "src": "srcs/sf-graphics-renderwindow.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 104,
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
                      "text": "isOpen",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L104C13"
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
                      "text": "renderWindow",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L104C21"
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
                      "text": "sfRenderWindow_Ptr",
                      "href": "docs/sf__graphics___spec.html#L50C9"
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
                      "href": "docs/sf___spec.html#L52C9"
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
                  "text": " Tell whether or not a render window is opened\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderWindow",
              "line": 104,
              "column": 21,
              "type": {
                "label": "Sf.Graphics.sfRenderWindow_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L50C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render window object\n"
                    }
                  ]
                }
              ]
            }
          ],
          "returns": {
            "description": [
            ]
          }
        },
        {
          "label": "isSrgb",
          "qualifier": "",
          "line": 179,
          "column": 13,
          "src": "srcs/sf-graphics-renderwindow.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 179,
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
                      "href": "docs/sf__graphics__renderwindow___spec.html#L179C13"
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
                      "text": "renderWindow",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L179C21"
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
                      "text": "sfRenderWindow_Ptr",
                      "href": "docs/sf__graphics___spec.html#L50C9"
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
                      "href": "docs/sf___spec.html#L52C9"
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
                  "text": " Tell if the render window will use sRGB encoding when drawing on it\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderWindow",
              "line": 179,
              "column": 21,
              "type": {
                "label": "Sf.Graphics.sfRenderWindow_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L50C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render window object\n"
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
                    "text": "sfTrue if the render window use sRGB encoding, sfFalse otherwise\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "mapCoordsToPixel",
          "qualifier": "",
          "line": 482,
          "column": 13,
          "src": "srcs/sf-graphics-renderwindow.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 482,
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
                      "href": "docs/sf__graphics__renderwindow___spec.html#L482C13"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 483,
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
                      "text": "renderWindow",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L483C7"
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
                      "text": "sfRenderWindow_Ptr",
                      "href": "docs/sf__graphics___spec.html#L50C9"
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
                  "number": 484,
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
                      "href": "docs/sf__graphics__renderwindow___spec.html#L484C7"
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
                  "number": 485,
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
                      "href": "docs/sf__graphics__renderwindow___spec.html#L485C7"
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
                      "href": "docs/sf__graphics___spec.html#L77C9"
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
                  "text": " Convert a point from world coordinates to window coordinates\n"
                },
                {
                  "kind": "span",
                  "text": "This function finds the pixel of the render-window that matches\n"
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
                  "text": "render-window, this assertion is not true anymore, ie. a point\n"
                },
                {
                  "kind": "span",
                  "text": "located at (150, 75) in your 2D world may map to the pixel\n"
                },
                {
                  "kind": "span",
                  "text": "(10, 50) of your render-window -- if the view is translated by (140, 25).\n"
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
                  "text": "render-window.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderWindow",
              "line": 483,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfRenderWindow_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L50C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render window object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "point",
              "line": 484,
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
              "line": 485,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfView_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L77C9"
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
          "line": 453,
          "column": 13,
          "src": "srcs/sf-graphics-renderwindow.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 453,
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
                      "href": "docs/sf__graphics__renderwindow___spec.html#L453C13"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 454,
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
                      "text": "renderWindow",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L454C7"
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
                      "text": "sfRenderWindow_Ptr",
                      "href": "docs/sf__graphics___spec.html#L50C9"
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
                  "number": 455,
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
                      "href": "docs/sf__graphics__renderwindow___spec.html#L455C7"
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
                  "number": 456,
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
                      "href": "docs/sf__graphics__renderwindow___spec.html#L456C7"
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
                      "text": "sfView_Ptr",
                      "href": "docs/sf__graphics___spec.html#L77C9"
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
                  "text": " Convert a point from window coordinates to world coordinates\n"
                },
                {
                  "kind": "span",
                  "text": "This function finds the 2D position that matches the\n"
                },
                {
                  "kind": "span",
                  "text": "given pixel of the render-window. In other words, it does\n"
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
                  "text": "render-window, this assertion is not true anymore, ie. a point\n"
                },
                {
                  "kind": "span",
                  "text": "located at (10, 50) in your render-window may map to the point\n"
                },
                {
                  "kind": "span",
                  "text": "(150, 75) in your 2D world -- if the view is translated by (140, 25).\n"
                },
                {
                  "kind": "span",
                  "text": "This function is typically used to find which point (or object) is\n"
                },
                {
                  "kind": "span",
                  "text": "located below the mouse cursor.\n"
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
                  "text": "render-window.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderWindow",
              "line": 454,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfRenderWindow_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L50C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render window object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "point",
              "line": 455,
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
              "line": 456,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfView_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L77C9"
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
          "label": "pollEvent",
          "qualifier": "",
          "line": 125,
          "column": 13,
          "src": "srcs/sf-graphics-renderwindow.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 125,
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
                      "text": "pollEvent",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L125C13"
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
                      "text": "renderWindow",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L125C24"
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
                      "text": "sfRenderWindow_Ptr",
                      "href": "docs/sf__graphics___spec.html#L50C9"
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
                      "text": "                       "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "event",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L126C24"
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
                      "text": "in"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "out"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Sf.Window.Event.sfEvent",
                      "href": "docs/sf__window__event___spec.html#L210C9"
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
                      "href": "docs/sf___spec.html#L52C9"
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
                  "text": " Get the event on top of event queue of a render window, if any, and pop it\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderWindow",
              "line": 125,
              "column": 24,
              "type": {
                "label": "Sf.Graphics.sfRenderWindow_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L50C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render window object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "event",
              "line": 126,
              "column": 24,
              "type": {
                "label": "Sf.Window.Event.sfEvent",
                "docHref": "docs/sf__window__event___spec.html#L210C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Event to fill, if any\n"
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
                    "text": "sfTrue if an event was returned, sfFalse if event queue was empty\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "popGLStates",
          "qualifier": "",
          "line": 594,
          "column": 14,
          "src": "srcs/sf-graphics-renderwindow.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 594,
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
                      "href": "docs/sf__graphics__renderwindow___spec.html#L594C14"
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
                      "text": "renderWindow",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L594C27"
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
                      "text": "sfRenderWindow_Ptr",
                      "href": "docs/sf__graphics___spec.html#L50C9"
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
              "label": "renderWindow",
              "line": 594,
              "column": 27,
              "type": {
                "label": "Sf.Graphics.sfRenderWindow_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L50C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "render window object\n"
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
          "line": 583,
          "column": 14,
          "src": "srcs/sf-graphics-renderwindow.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 583,
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
                      "href": "docs/sf__graphics__renderwindow___spec.html#L583C14"
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
                      "text": "renderWindow",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L583C28"
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
                      "text": "sfRenderWindow_Ptr",
                      "href": "docs/sf__graphics___spec.html#L50C9"
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
              "label": "renderWindow",
              "line": 583,
              "column": 28,
              "type": {
                "label": "Sf.Graphics.sfRenderWindow_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L50C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "render window object\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "requestFocus",
          "qualifier": "",
          "line": 339,
          "column": 14,
          "src": "srcs/sf-graphics-renderwindow.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 339,
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
                      "text": "requestFocus",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L339C14"
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
                      "text": "renderWindow",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L339C28"
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
                      "text": "sfRenderWindow_Ptr",
                      "href": "docs/sf__graphics___spec.html#L50C9"
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
                  "text": " Request the current render window to be made the active\n"
                },
                {
                  "kind": "span",
                  "text": "foreground window\n"
                },
                {
                  "kind": "span",
                  "text": "At any given time, only one window may have the input focus\n"
                },
                {
                  "kind": "span",
                  "text": "to receive input events such as keystrokes or mouse events.\n"
                },
                {
                  "kind": "span",
                  "text": "If a window requests focus, it only hints to the operating\n"
                },
                {
                  "kind": "span",
                  "text": "system, that it would like to be focused. The operating system\n"
                },
                {
                  "kind": "span",
                  "text": "is free to deny the request.\n"
                },
                {
                  "kind": "span",
                  "text": "This is not to be confused with sfWindow_setActive().\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderWindow",
              "line": 339,
              "column": 28,
              "type": {
                "label": "Sf.Graphics.sfRenderWindow_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L50C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "resetGLStates",
          "qualifier": "",
          "line": 608,
          "column": 14,
          "src": "srcs/sf-graphics-renderwindow.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 608,
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
                      "href": "docs/sf__graphics__renderwindow___spec.html#L608C14"
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
                      "text": "renderWindow",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L608C29"
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
                      "text": "sfRenderWindow_Ptr",
                      "href": "docs/sf__graphics___spec.html#L50C9"
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
                  "text": "states needed by SFML are set, so that subsequent sfRenderWindow_draw*()\n"
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
              "label": "renderWindow",
              "line": 608,
              "column": 29,
              "type": {
                "label": "Sf.Graphics.sfRenderWindow_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L50C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "render window object\n"
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
          "line": 325,
          "column": 13,
          "src": "srcs/sf-graphics-renderwindow.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 325,
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
                      "href": "docs/sf__graphics__renderwindow___spec.html#L325C13"
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
                      "text": "renderWindow",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L325C24"
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
                      "text": "sfRenderWindow_Ptr",
                      "href": "docs/sf__graphics___spec.html#L50C9"
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
                      "href": "docs/sf__graphics__renderwindow___spec.html#L325C59"
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
                      "href": "docs/sf___spec.html#L52C9"
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
                      "href": "docs/sf___spec.html#L52C9"
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
                  "text": " Activate or deactivate a render window as the current target for rendering\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderWindow",
              "line": 325,
              "column": 24,
              "type": {
                "label": "Sf.Graphics.sfRenderWindow_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L50C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render window object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "active",
              "line": 325,
              "column": 59,
              "type": {
                "label": "Sf.sfBool",
                "docHref": "docs/sf___spec.html#L52C9"
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
          "label": "setFramerateLimit",
          "qualifier": "",
          "line": 305,
          "column": 14,
          "src": "srcs/sf-graphics-renderwindow.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 305,
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
                      "text": "setFramerateLimit",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L305C14"
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
                      "text": "renderWindow",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L305C33"
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
                      "text": "sfRenderWindow_Ptr",
                      "href": "docs/sf__graphics___spec.html#L50C9"
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
                      "text": "limit",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L305C68"
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
                      "href": "docs/sf___spec.html#L92C9"
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
                  "text": " Limit the framerate to a maximum fixed frequency for a render window\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderWindow",
              "line": 305,
              "column": 33,
              "type": {
                "label": "Sf.Graphics.sfRenderWindow_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L50C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render window object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "limit",
              "line": 305,
              "column": 68,
              "type": {
                "label": "Sf.sfUint32",
                "docHref": "docs/sf___spec.html#L92C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Framerate limit, in frames per seconds (use 0 to disable limit)\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "setIcon",
          "qualifier": "",
          "line": 218,
          "column": 14,
          "src": "srcs/sf-graphics-renderwindow.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 218,
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
                      "text": "setIcon",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L218C14"
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
                      "text": "renderWindow",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L218C23"
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
                      "text": "sfRenderWindow_Ptr",
                      "href": "docs/sf__graphics___spec.html#L50C9"
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
                      "text": "                      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "width",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L219C23"
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
                      "text": "height",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L219C30"
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
                      "href": "docs/sf___spec.html#L92C9"
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
                  "number": 220,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "pixels",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L220C23"
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
                      "text": "sfUint8_Ptr",
                      "href": "docs/sf___spec.html#L71C9"
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
                  "text": " Change a render window's icon\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderWindow",
              "line": 218,
              "column": 23,
              "type": {
                "label": "Sf.Graphics.sfRenderWindow_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L50C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render window object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "width",
              "line": 219,
              "column": 23,
              "type": {
                "label": "Sf.sfUint32",
                "docHref": "docs/sf___spec.html#L92C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Icon's width, in pixels\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "height",
              "line": 219,
              "column": 30,
              "type": {
                "label": "Sf.sfUint32",
                "docHref": "docs/sf___spec.html#L92C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Icon's height, in pixels\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "pixels",
              "line": 220,
              "column": 23,
              "type": {
                "label": "Sf.sfUint8_Ptr",
                "docHref": "docs/sf___spec.html#L71C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Pointer to the pixels in memory, format must be RGBA 32 bits\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "setJoystickThreshold",
          "qualifier": "",
          "line": 314,
          "column": 14,
          "src": "srcs/sf-graphics-renderwindow.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 314,
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
                      "text": "setJoystickThreshold",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L314C14"
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
                      "text": "renderWindow",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L314C36"
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
                      "text": "sfRenderWindow_Ptr",
                      "href": "docs/sf__graphics___spec.html#L50C9"
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
                      "text": "threshold",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L314C71"
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
                      "text": "Float"
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
                  "text": " Change the joystick threshold, ie. the value below which no move event will be generated\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderWindow",
              "line": 314,
              "column": 36,
              "type": {
                "label": "Sf.Graphics.sfRenderWindow_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L50C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render window object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "threshold",
              "line": 314,
              "column": 71,
              "type": {
                "label": "Float"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "New threshold, in range [0, 100]\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "setKeyRepeatEnabled",
          "qualifier": "",
          "line": 296,
          "column": 14,
          "src": "srcs/sf-graphics-renderwindow.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 296,
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
                      "text": "setKeyRepeatEnabled",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L296C14"
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
                      "text": "renderWindow",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L296C35"
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
                      "text": "sfRenderWindow_Ptr",
                      "href": "docs/sf__graphics___spec.html#L50C9"
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
                      "text": "enabled",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L296C70"
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
                      "href": "docs/sf___spec.html#L52C9"
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
                  "text": " Enable or disable automatic key-repeat for keydown events\n"
                },
                {
                  "kind": "span",
                  "text": "Automatic key-repeat is enabled by default\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderWindow",
              "line": 296,
              "column": 35,
              "type": {
                "label": "Sf.Graphics.sfRenderWindow_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L50C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render window object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "enabled",
              "line": 296,
              "column": 70,
              "type": {
                "label": "Sf.sfBool",
                "docHref": "docs/sf___spec.html#L52C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "sfTrue to enable, sfFalse to disable\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "setMouseCursor",
          "qualifier": "",
          "line": 285,
          "column": 14,
          "src": "srcs/sf-graphics-renderwindow.ads.html",
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
                      "text": "setMouseCursor",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L285C14"
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
                      "text": "renderWindow",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L285C30"
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
                      "text": "sfRenderWindow_Ptr",
                      "href": "docs/sf__graphics___spec.html#L50C9"
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
                      "text": "cursor",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L285C65"
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
                      "text": "Sf.Window.sfCursor_Ptr",
                      "href": "docs/sf__window___spec.html#L61C9"
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
                  "text": " Set the displayed cursor to a native system cursor\n"
                },
                {
                  "kind": "span",
                  "text": "Upon window creation, the arrow cursor is used by default.\n"
                },
                {
                  "kind": "html",
                  "html": "<br/><br/><span class=\"warning\">Warning!</span> ",
                  "children": [
                  ]
                },
                {
                  "kind": "span",
                  "text": " The cursor must not be destroyed while in use by\n"
                },
                {
                  "kind": "span",
                  "text": "the window.\n"
                },
                {
                  "kind": "html",
                  "html": "<br/><br/><span class=\"warning\">Warning!</span> ",
                  "children": [
                  ]
                },
                {
                  "kind": "span",
                  "text": " Features related to Cursor are not supported on\n"
                },
                {
                  "kind": "span",
                  "text": "iOS and Android.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderWindow",
              "line": 285,
              "column": 30,
              "type": {
                "label": "Sf.Graphics.sfRenderWindow_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L50C9"
              },
              "description": [
              ]
            },
            {
              "label": "cursor",
              "line": 285,
              "column": 65,
              "type": {
                "label": "Sf.Window.sfCursor_Ptr",
                "docHref": "docs/sf__window___spec.html#L61C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Native system cursor type to display\n"
                    },
                    {
                      "kind": "html",
                      "html": "<br/><br/><span class=\"info\">See:</span> ",
                      "children": [
                      ]
                    },
                    {
                      "kind": "span",
                      "text": " sfCursor_createFromSystem\n"
                    },
                    {
                      "kind": "html",
                      "html": "<br/><br/><span class=\"info\">See:</span> ",
                      "children": [
                      ]
                    },
                    {
                      "kind": "span",
                      "text": " sfCursor_createFromPixels\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "setMouseCursorGrabbed",
          "qualifier": "",
          "line": 265,
          "column": 14,
          "src": "srcs/sf-graphics-renderwindow.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 265,
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
                      "text": "setMouseCursorGrabbed",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L265C14"
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
                      "text": "renderWindow",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L265C37"
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
                      "text": "sfRenderWindow_Ptr",
                      "href": "docs/sf__graphics___spec.html#L50C9"
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
                  "number": 266,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                    "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "grabbed",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L266C37"
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
                      "cssClass": "identifier",
                      "text": "sfBool",
                      "href": "docs/sf___spec.html#L52C9"
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
                  "text": " Grab or release the mouse cursor\n"
                },
                {
                  "kind": "span",
                  "text": "If set, grabs the mouse cursor inside this window's client\n"
                },
                {
                  "kind": "span",
                  "text": "area so it may no longer be moved outside its bounds.\n"
                },
                {
                  "kind": "span",
                  "text": "Note that grabbing is only active while the window has\n"
                },
                {
                  "kind": "span",
                  "text": "focus and calling this function for fullscreen windows\n"
                },
                {
                  "kind": "span",
                  "text": "won't have any effect (fullscreen windows always grab the\n"
                },
                {
                  "kind": "span",
                  "text": "cursor).\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderWindow",
              "line": 265,
              "column": 37,
              "type": {
                "label": "Sf.Graphics.sfRenderWindow_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L50C9"
              },
              "description": [
              ]
            },
            {
              "label": "grabbed",
              "line": 266,
              "column": 37,
              "type": {
                "label": "Sf.sfBool",
                "docHref": "docs/sf___spec.html#L52C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "sfTrue to enable, sfFalse to disable\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "setMouseCursorVisible",
          "qualifier": "",
          "line": 248,
          "column": 14,
          "src": "srcs/sf-graphics-renderwindow.ads.html",
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
                      "text": "setMouseCursorVisible",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L248C14"
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
                      "text": "renderWindow",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L248C37"
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
                      "text": "sfRenderWindow_Ptr",
                      "href": "docs/sf__graphics___spec.html#L50C9"
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
                      "text": "                                    "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "show",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L249C37"
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
                      "text": "sfBool",
                      "href": "docs/sf___spec.html#L52C9"
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
                  "text": " Show or hide the mouse cursor on a render window\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderWindow",
              "line": 248,
              "column": 37,
              "type": {
                "label": "Sf.Graphics.sfRenderWindow_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L50C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render window object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "show",
              "line": 249,
              "column": 37,
              "type": {
                "label": "Sf.sfBool",
                "docHref": "docs/sf___spec.html#L52C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "sfTrue to show, sfFalse to hide\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "setPosition",
          "qualifier": "",
          "line": 159,
          "column": 14,
          "src": "srcs/sf-graphics-renderwindow.ads.html",
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
                      "text": "setPosition",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L159C14"
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
                      "text": "renderWindow",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L159C27"
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
                      "text": "sfRenderWindow_Ptr",
                      "href": "docs/sf__graphics___spec.html#L50C9"
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
                      "text": "position",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L159C62"
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
                      "href": "docs/sf__system__vector2___spec.html#L25C9"
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
                  "text": " Change the position of a render window on screen\n"
                },
                {
                  "kind": "span",
                  "text": "Only works for top-level windows\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderWindow",
              "line": 159,
              "column": 27,
              "type": {
                "label": "Sf.Graphics.sfRenderWindow_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L50C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render window object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "position",
              "line": 159,
              "column": 62,
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
                      "text": "New position, in pixels\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "setSize",
          "qualifier": "",
          "line": 188,
          "column": 14,
          "src": "srcs/sf-graphics-renderwindow.ads.html",
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
                      "text": "setSize",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L188C14"
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
                      "text": "renderWindow",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L188C23"
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
                      "text": "sfRenderWindow_Ptr",
                      "href": "docs/sf__graphics___spec.html#L50C9"
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
                      "text": "size",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L188C58"
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
                  "text": " Change the size of the rendering region of a render window\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderWindow",
              "line": 188,
              "column": 23,
              "type": {
                "label": "Sf.Graphics.sfRenderWindow_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L50C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render window object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "size",
              "line": 188,
              "column": 58,
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
                      "text": "New size, in pixels\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "setTitle",
          "qualifier": "",
          "line": 197,
          "column": 14,
          "src": "srcs/sf-graphics-renderwindow.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 197,
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
                      "text": "setTitle",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L197C14"
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
                      "text": "renderWindow",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L197C24"
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
                      "text": "sfRenderWindow_Ptr",
                      "href": "docs/sf__graphics___spec.html#L50C9"
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
                      "text": "title",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L197C59"
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
                      "text": "String"
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
                  "text": " Change the title of a render window\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderWindow",
              "line": 197,
              "column": 24,
              "type": {
                "label": "Sf.Graphics.sfRenderWindow_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L50C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render window object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "title",
              "line": 197,
              "column": 59,
              "type": {
                "label": "String"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "New title\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "setUnicodeTitle",
          "qualifier": "",
          "line": 206,
          "column": 14,
          "src": "srcs/sf-graphics-renderwindow.ads.html",
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
                      "text": "setUnicodeTitle",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L206C14"
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
                      "text": "renderWindow",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L206C31"
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
                      "text": "sfRenderWindow_Ptr",
                      "href": "docs/sf__graphics___spec.html#L50C9"
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
                      "text": "title",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L206C66"
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
                      "text": "Wide_Wide_String"
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
                  "text": " Change the title of a render window (with a UTF-32 string)\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderWindow",
              "line": 206,
              "column": 31,
              "type": {
                "label": "Sf.Graphics.sfRenderWindow_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L50C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render window object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "title",
              "line": 206,
              "column": 66,
              "type": {
                "label": "Wide_Wide_String"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "New title\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "setVerticalSyncEnabled",
          "qualifier": "",
          "line": 238,
          "column": 14,
          "src": "srcs/sf-graphics-renderwindow.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 238,
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
                      "text": "setVerticalSyncEnabled",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L238C14"
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
                      "text": "renderWindow",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L238C38"
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
                      "text": "sfRenderWindow_Ptr",
                      "href": "docs/sf__graphics___spec.html#L50C9"
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
                  "number": 239,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "enabled",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L239C38"
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
                      "cssClass": "identifier",
                      "text": "sfBool",
                      "href": "docs/sf___spec.html#L52C9"
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
                  "text": " Enable / disable vertical synchronization on a render window\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderWindow",
              "line": 238,
              "column": 38,
              "type": {
                "label": "Sf.Graphics.sfRenderWindow_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L50C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render window object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "enabled",
              "line": 239,
              "column": 38,
              "type": {
                "label": "Sf.sfBool",
                "docHref": "docs/sf___spec.html#L52C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "sfTrue to enable v-sync, sfFalse to deactivate\n"
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
          "line": 389,
          "column": 14,
          "src": "srcs/sf-graphics-renderwindow.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 389,
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
                      "href": "docs/sf__graphics__renderwindow___spec.html#L389C14"
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
                      "text": "renderWindow",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L389C23"
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
                      "text": "sfRenderWindow_Ptr",
                      "href": "docs/sf__graphics___spec.html#L50C9"
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
                  "number": 390,
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
                      "href": "docs/sf__graphics__renderwindow___spec.html#L390C23"
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
                      "text": "sfView_Ptr",
                      "href": "docs/sf__graphics___spec.html#L77C9"
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
                  "text": " Change the current active view of a render window\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderWindow",
              "line": 389,
              "column": 23,
              "type": {
                "label": "Sf.Graphics.sfRenderWindow_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L50C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render window object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "view",
              "line": 390,
              "column": 23,
              "type": {
                "label": "Sf.Graphics.sfView_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L77C9"
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
          "label": "setVisible",
          "qualifier": "",
          "line": 229,
          "column": 14,
          "src": "srcs/sf-graphics-renderwindow.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 229,
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
                      "text": "setVisible",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L229C14"
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
                      "text": "renderWindow",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L229C26"
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
                      "text": "sfRenderWindow_Ptr",
                      "href": "docs/sf__graphics___spec.html#L50C9"
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
                      "text": "visible",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L229C61"
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
                      "href": "docs/sf___spec.html#L52C9"
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
                  "text": " Show or hide a render window\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderWindow",
              "line": 229,
              "column": 26,
              "type": {
                "label": "Sf.Graphics.sfRenderWindow_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L50C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render window object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "visible",
              "line": 229,
              "column": 61,
              "type": {
                "label": "Sf.sfBool",
                "docHref": "docs/sf___spec.html#L52C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "sfTrue to show the window, sfFalse to hide it\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "waitEvent",
          "qualifier": "",
          "line": 138,
          "column": 13,
          "src": "srcs/sf-graphics-renderwindow.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 138,
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
                      "text": "waitEvent",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L138C13"
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
                      "text": "renderWindow",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L138C24"
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
                      "text": "sfRenderWindow_Ptr",
                      "href": "docs/sf__graphics___spec.html#L50C9"
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
                      "text": "event",
                      "href": "docs/sf__graphics__renderwindow___spec.html#L138C59"
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
                      "text": "in"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "out"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Sf.Window.Event.sfEvent",
                      "href": "docs/sf__window__event___spec.html#L210C9"
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
                      "href": "docs/sf___spec.html#L52C9"
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
                  "text": " Wait for an event and return it\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "renderWindow",
              "line": 138,
              "column": 24,
              "type": {
                "label": "Sf.Graphics.sfRenderWindow_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L50C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Render window object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "event",
              "line": 138,
              "column": 59,
              "type": {
                "label": "Sf.Window.Event.sfEvent",
                "docHref": "docs/sf__window__event___spec.html#L210C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Event to fill\n"
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
                    "text": "sfFalse if an error occured\n"
                  }
                ]
              }
            ]
          }
        }
      ],
      "label": "Subprograms"
    },
    {
      "entities": [
        {
          "label": "Mouse",
          "href": "../docs/sf__graphics__renderwindow___mouse___spec.html#L638C12",
          "qualifier": "",
          "summary": [
          ],
          "description": [
          ]
        },
        {
          "label": "Touch",
          "href": "../docs/sf__graphics__renderwindow___touch___spec.html#L673C12",
          "qualifier": "",
          "summary": [
          ],
          "description": [
          ]
        }
      ],
      "label": "Nested packages"
    }
  ]
};