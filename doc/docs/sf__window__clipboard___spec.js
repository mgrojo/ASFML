GNATdoc.Documentation = {
  "label": "Sf.Window.Clipboard",
  "qualifier": "",
  "summary": [
  ],
  "description": [
  ],
  "entities": [
    {
      "entities": [
        {
          "label": "getString",
          "qualifier": "",
          "line": 38,
          "column": 13,
          "src": "srcs/sf-window-clipboard.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 38,
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
                      "text": "getString",
                      "href": "docs/sf__window__clipboard___spec.html#L38C13"
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
                      "text": "String"
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
                  "text": " Get the content of the clipboard as string data (returns an ANSI string)\n"
                },
                {
                  "kind": "span",
                  "text": "This function returns the content of the clipboard\n"
                },
                {
                  "kind": "span",
                  "text": "as a string. If the clipboard does not contain string\n"
                },
                {
                  "kind": "span",
                  "text": "it returns an empty string.\n"
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
                    "text": "Clipboard contents as a locale-dependent ANSI string\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "getUnicodeString",
          "qualifier": "",
          "line": 50,
          "column": 13,
          "src": "srcs/sf-window-clipboard.ads.html",
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
                      "text": "getUnicodeString",
                      "href": "docs/sf__window__clipboard___spec.html#L50C13"
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
                      "text": "Wide_Wide_String"
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
                  "text": " Get the content of the clipboard as string data (returns a Unicode string)\n"
                },
                {
                  "kind": "span",
                  "text": "This function returns the content of the clipboard\n"
                },
                {
                  "kind": "span",
                  "text": "as a string. If the clipboard does not contain string\n"
                },
                {
                  "kind": "span",
                  "text": "it returns an empty string.\n"
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
                    "text": "Clipboard contents as UTF-32\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "setString",
          "qualifier": "",
          "line": 62,
          "column": 14,
          "src": "srcs/sf-window-clipboard.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 62,
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
                      "text": "setString",
                      "href": "docs/sf__window__clipboard___spec.html#L62C14"
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
                      "text": "text",
                      "href": "docs/sf__window__clipboard___spec.html#L62C25"
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
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": " Set the content of the clipboard as ANSI string data\n"
                },
                {
                  "kind": "span",
                  "text": "This function sets the content of the clipboard as an\n"
                },
                {
                  "kind": "span",
                  "text": "ANSI string.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "text",
              "line": 62,
              "column": 25,
              "type": {
                "label": "String"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "ANSI string containing the data to be sent\n"
                    },
                    {
                      "kind": "span",
                      "text": "to the clipboard\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "setUnicodeString",
          "qualifier": "",
          "line": 74,
          "column": 14,
          "src": "srcs/sf-window-clipboard.ads.html",
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
                      "text": "setUnicodeString",
                      "href": "docs/sf__window__clipboard___spec.html#L74C14"
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
                      "text": "text",
                      "href": "docs/sf__window__clipboard___spec.html#L74C32"
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
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": " Set the content of the clipboard as Unicode string data\n"
                },
                {
                  "kind": "span",
                  "text": "This function sets the content of the clipboard as a\n"
                },
                {
                  "kind": "span",
                  "text": "Unicode string.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "text",
              "line": 74,
              "column": 32,
              "type": {
                "label": "Wide_Wide_String"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Unicode string containing the data to be sent\n"
                    },
                    {
                      "kind": "span",
                      "text": "to the clipboard\n"
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