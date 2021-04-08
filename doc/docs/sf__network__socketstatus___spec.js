GNATdoc.Documentation = {
  "label": "Sf.Network.SocketStatus",
  "qualifier": "",
  "summary": [
  ],
  "description": [
  ],
  "entities": [
    {
      "entities": [
        {
          "label": "sfSocketStatus",
          "qualifier": "",
          "line": 34,
          "column": 9,
          "src": "srcs/sf-network-socketstatus.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 34,
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
                      "text": "sfSocketStatus",
                      "href": "docs/sf__network__socketstatus___spec.html#L34C9"
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
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 35,
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
                      "text": "sfSocketDone",
                      "href": "docs/sf__network__socketstatus___spec.html#L35C7"
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
                  "number": 36,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfSocketNotReady",
                      "href": "docs/sf__network__socketstatus___spec.html#L36C7"
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
                  "number": 37,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfSocketPartial",
                      "href": "docs/sf__network__socketstatus___spec.html#L37C7"
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
                  "number": 38,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "sfSocketDisconnected",
                      "href": "docs/sf__network__socketstatus___spec.html#L38C7"
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
                      "text": "sfSocketError",
                      "href": "docs/sf__network__socketstatus___spec.html#L39C7"
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
                      "href": "docs/sf__network__socketstatus___spec.html#L34C9"
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
                  "text": " Define the status that can be returned by the socket functions\n"
                },
                {
                  "kind": "span",
                  "text": "The socket has sent / received the data\n"
                },
                {
                  "kind": "span",
                  "text": "The socket is not ready to send / receive data yet\n"
                },
                {
                  "kind": "span",
                  "text": "The socket sent a part of the data\n"
                },
                {
                  "kind": "span",
                  "text": "The TCP socket has been disconnected\n"
                },
                {
                  "kind": "span",
                  "text": "An unexpected error happened\n"
                }
              ]
            }
          ],
          "literals": [
            {
              "label": "sfSocketDone",
              "line": 35,
              "column": 7,
              "description": [
              ]
            },
            {
              "label": "sfSocketNotReady",
              "line": 36,
              "column": 7,
              "description": [
              ]
            },
            {
              "label": "sfSocketPartial",
              "line": 37,
              "column": 7,
              "description": [
              ]
            },
            {
              "label": "sfSocketDisconnected",
              "line": 38,
              "column": 7,
              "description": [
              ]
            },
            {
              "label": "sfSocketError",
              "line": 39,
              "column": 7,
              "description": [
              ]
            }
          ]
        }
      ],
      "label": "Simple types"
    }
  ]
};