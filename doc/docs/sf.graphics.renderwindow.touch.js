GNATdoc.Documentation = {
  "label": "Sf.Graphics.RenderWindow.Touch",
  "summary": [
  ],
  "description": [
  ],
  "entities": [
    {
      "entities": [
        {
          "label": "getPosition",
          "line": 635,
          "column": 16,
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
                      "text": "      "
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
                      "href": "docs/sf.graphics.renderwindow.touch.html#L635C16"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 636,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "        "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "finger",
                      "href": "docs/sf.graphics.renderwindow.touch.html#L636C10"
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
                      "text": "sfUint32",
                      "href": "docs/sf.html#L107C9"
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
                  "number": 637,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "         "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "relativeTo",
                      "href": "docs/sf.graphics.renderwindow.touch.html#L637C10"
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
                      "href": "docs/sf.graphics.html#L50C9"
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
                      "href": "docs/sf.system.vector2.html#L25C9"
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
                  "text": "Get the current position of a touch in window coordinates\n"
                },
                {
                  "kind": "span",
                  "text": "This function returns the current touch position\n"
                },
                {
                  "kind": "span",
                  "text": "relative to the given render window, or desktop if NULL is passed.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "finger",
              "line": 636,
              "column": 10,
              "type": {
                "label": "Sf.sfUint32",
                "docHref": "docs/sf.html#L107C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Finger index\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "relativeTo",
              "line": 637,
              "column": 10,
              "type": {
                "label": "Sf.Graphics.sfRenderWindow_Ptr",
                "docHref": "docs/sf.graphics.html#L50C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Reference window\n"
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
                    "text": "Current position of @a finger, or undefined if it's not down\n"
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