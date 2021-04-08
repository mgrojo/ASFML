GNATdoc.Documentation = {
  "label": "Sf.Network.Http.Request",
  "qualifier": "(nested)",
  "summary": [
  ],
  "description": [
  ],
  "entities": [
    {
      "entities": [
        {
          "label": "create",
          "qualifier": "",
          "line": 111,
          "column": 16,
          "src": "srcs/sf-network-http.ads.html",
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
                      "text": "create",
                      "href": "docs/sf__network__http___request___spec.html#L111C16"
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
                      "text": "sfHttpRequest_Ptr",
                      "href": "docs/sf__network___spec.html#L38C9"
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
                  "text": " Create a new HTTP request\n"
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
                    "text": "A new sfHttpRequest object\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "destroy",
          "qualifier": "",
          "line": 119,
          "column": 17,
          "src": "srcs/sf-network-http.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 119,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
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
                      "href": "docs/sf__network__http___request___spec.html#L119C17"
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
                      "text": "httpRequest",
                      "href": "docs/sf__network__http___request___spec.html#L119C26"
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
                      "text": "sfHttpRequest_Ptr",
                      "href": "docs/sf__network___spec.html#L38C9"
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
                  "text": " Destroy a HTTP request\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "httpRequest",
              "line": 119,
              "column": 26,
              "type": {
                "label": "Sf.Network.sfHttpRequest_Ptr",
                "docHref": "docs/sf__network___spec.html#L38C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "HTTP request to destroy\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "setBody",
          "qualifier": "",
          "line": 194,
          "column": 17,
          "src": "srcs/sf-network-http.ads.html",
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
                      "text": "      "
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
                      "text": "setBody",
                      "href": "docs/sf__network__http___request___spec.html#L194C17"
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
                      "text": "httpRequest",
                      "href": "docs/sf__network__http___request___spec.html#L194C26"
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
                      "text": "sfHttpRequest_Ptr",
                      "href": "docs/sf__network___spec.html#L38C9"
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
                  "number": 195,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                         "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "httpBody",
                      "href": "docs/sf__network__http___request___spec.html#L195C26"
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
                  "text": " Set the body of a HTTP request\n"
                },
                {
                  "kind": "span",
                  "text": "The body of a request is optional and only makes sense\n"
                },
                {
                  "kind": "span",
                  "text": "for POST requests. It is ignored for all other methods.\n"
                },
                {
                  "kind": "span",
                  "text": "The body is empty by default.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "httpRequest",
              "line": 194,
              "column": 26,
              "type": {
                "label": "Sf.Network.sfHttpRequest_Ptr",
                "docHref": "docs/sf__network___spec.html#L38C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "HTTP request\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "httpBody",
              "line": 195,
              "column": 26,
              "type": {
                "label": "String"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Content of the body\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "setField",
          "qualifier": "",
          "line": 135,
          "column": 17,
          "src": "srcs/sf-network-http.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 135,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
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
                      "text": "setField",
                      "href": "docs/sf__network__http___request___spec.html#L135C17"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 136,
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
                      "text": "httpRequest",
                      "href": "docs/sf__network__http___request___spec.html#L136C10"
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
                      "text": "sfHttpRequest_Ptr",
                      "href": "docs/sf__network___spec.html#L38C9"
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
                  "number": 137,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "         "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "field",
                      "href": "docs/sf__network__http___request___spec.html#L137C10"
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
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 138,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "         "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "value",
                      "href": "docs/sf__network__http___request___spec.html#L138C10"
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
                  "text": " Set the value of a header field of a HTTP request\n"
                },
                {
                  "kind": "span",
                  "text": "The field is created if it doesn't exist. The name of\n"
                },
                {
                  "kind": "span",
                  "text": "the field is case insensitive.\n"
                },
                {
                  "kind": "span",
                  "text": "By default, a request doesn't contain any field (but the\n"
                },
                {
                  "kind": "span",
                  "text": "mandatory fields are added later by the HTTP client when\n"
                },
                {
                  "kind": "span",
                  "text": "sending the request).\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "httpRequest",
              "line": 136,
              "column": 10,
              "type": {
                "label": "Sf.Network.sfHttpRequest_Ptr",
                "docHref": "docs/sf__network___spec.html#L38C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "HTTP request\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "field",
              "line": 137,
              "column": 10,
              "type": {
                "label": "String"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Name of the field to set\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "value",
              "line": 138,
              "column": 10,
              "type": {
                "label": "String"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Value of the field\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "setHttpVersion",
          "qualifier": "",
          "line": 178,
          "column": 17,
          "src": "srcs/sf-network-http.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 178,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
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
                      "text": "setHttpVersion",
                      "href": "docs/sf__network__http___request___spec.html#L178C17"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 179,
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
                      "text": "httpRequest",
                      "href": "docs/sf__network__http___request___spec.html#L179C10"
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
                      "text": "sfHttpRequest_Ptr",
                      "href": "docs/sf__network___spec.html#L38C9"
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
                  "number": 180,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "         "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "major",
                      "href": "docs/sf__network__http___request___spec.html#L180C10"
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
                  "number": 181,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "         "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "minor",
                      "href": "docs/sf__network__http___request___spec.html#L181C10"
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
                      "href": "docs/sf___spec.html#L108C9"
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
                  "text": " Set the HTTP version of a HTTP request\n"
                },
                {
                  "kind": "span",
                  "text": "The HTTP version is 1.0 by default.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "httpRequest",
              "line": 179,
              "column": 10,
              "type": {
                "label": "Sf.Network.sfHttpRequest_Ptr",
                "docHref": "docs/sf__network___spec.html#L38C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "HTTP request\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "major",
              "line": 180,
              "column": 10,
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
                      "text": "Major HTTP version number\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "minor",
              "line": 181,
              "column": 10,
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
                      "text": "Minor HTTP version number\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "setMethod",
          "qualifier": "",
          "line": 151,
          "column": 17,
          "src": "srcs/sf-network-http.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 151,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
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
                      "text": "setMethod",
                      "href": "docs/sf__network__http___request___spec.html#L151C17"
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
                      "text": "httpRequest",
                      "href": "docs/sf__network__http___request___spec.html#L151C28"
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
                      "text": "sfHttpRequest_Ptr",
                      "href": "docs/sf__network___spec.html#L38C9"
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
                  "number": 152,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                           "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "method",
                      "href": "docs/sf__network__http___request___spec.html#L152C28"
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
                      "text": "sfHttpMethod",
                      "href": "docs/sf__network__http___spec.html#L39C9"
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
                  "text": " Set a HTTP request method\n"
                },
                {
                  "kind": "span",
                  "text": "See the sfHttpMethod enumeration for a complete list of all\n"
                },
                {
                  "kind": "span",
                  "text": "the availale methods.\n"
                },
                {
                  "kind": "span",
                  "text": "The method is sfHttpGet by default.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "httpRequest",
              "line": 151,
              "column": 28,
              "type": {
                "label": "Sf.Network.sfHttpRequest_Ptr",
                "docHref": "docs/sf__network___spec.html#L38C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "HTTP request\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "method",
              "line": 152,
              "column": 28,
              "type": {
                "label": "Sf.Network.Http.sfHttpMethod",
                "docHref": "docs/sf__network__http___spec.html#L39C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Method to use for the request\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "setUri",
          "qualifier": "",
          "line": 165,
          "column": 17,
          "src": "srcs/sf-network-http.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 165,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
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
                      "text": "setUri",
                      "href": "docs/sf__network__http___request___spec.html#L165C17"
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
                      "text": "httpRequest",
                      "href": "docs/sf__network__http___request___spec.html#L165C25"
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
                      "text": "sfHttpRequest_Ptr",
                      "href": "docs/sf__network___spec.html#L38C9"
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
                  "number": 166,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                        "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "uri",
                      "href": "docs/sf__network__http___request___spec.html#L166C25"
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
                  "text": " Set a HTTP request URI\n"
                },
                {
                  "kind": "span",
                  "text": "The URI is the resource (usually a web page or a file)\n"
                },
                {
                  "kind": "span",
                  "text": "that you want to get or post.\n"
                },
                {
                  "kind": "span",
                  "text": "The URI is \"/\" (the root page) by default.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "httpRequest",
              "line": 165,
              "column": 25,
              "type": {
                "label": "Sf.Network.sfHttpRequest_Ptr",
                "docHref": "docs/sf__network___spec.html#L38C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "HTTP request\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "uri",
              "line": 166,
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
                      "text": "URI to request, relative to the host\n"
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