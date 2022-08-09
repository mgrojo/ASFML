GNATdoc.Documentation = {
  "label": "Sf.Graphics.ConvexShape",
  "qualifier": "",
  "summary": [
  ],
  "description": [
  ],
  "entities": [
    {
      "entities": [
        {
          "label": "copy",
          "qualifier": "",
          "line": 43,
          "column": 13,
          "src": "srcs/sf-graphics-convexshape.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 43,
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
                      "href": "docs/sf__graphics__convexshape___spec.html#L43C13"
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
                      "text": "shape",
                      "href": "docs/sf__graphics__convexshape___spec.html#L43C19"
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
                      "href": "docs/sf__graphics___spec.html#L32C9"
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
                      "text": "sfConvexShape_Ptr",
                      "href": "docs/sf__graphics___spec.html#L32C9"
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
                  "text": " Copy an existing convex shape\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "shape",
              "line": 43,
              "column": 19,
              "type": {
                "label": "Sf.Graphics.sfConvexShape_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L32C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Shape to copy\n"
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
          "line": 33,
          "column": 13,
          "src": "srcs/sf-graphics-convexshape.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 33,
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
                      "href": "docs/sf__graphics__convexshape___spec.html#L33C13"
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
                      "text": "sfConvexShape_Ptr",
                      "href": "docs/sf__graphics___spec.html#L32C9"
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
                  "text": " Create a new convex shape\n"
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
                    "text": "A new sfConvexShape object, or NULL if it failed\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "destroy",
          "qualifier": "",
          "line": 51,
          "column": 14,
          "src": "srcs/sf-graphics-convexshape.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 51,
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
                      "href": "docs/sf__graphics__convexshape___spec.html#L51C14"
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
                      "text": "shape",
                      "href": "docs/sf__graphics__convexshape___spec.html#L51C23"
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
                      "href": "docs/sf__graphics___spec.html#L32C9"
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
                  "text": " Destroy an existing convex Shape\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "shape",
              "line": 51,
              "column": 23,
              "type": {
                "label": "Sf.Graphics.sfConvexShape_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L32C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Shape to delete\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "getFillColor",
          "qualifier": "",
          "line": 316,
          "column": 13,
          "src": "srcs/sf-graphics-convexshape.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 316,
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
                      "text": "getFillColor",
                      "href": "docs/sf__graphics__convexshape___spec.html#L316C13"
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
                      "text": "shape",
                      "href": "docs/sf__graphics__convexshape___spec.html#L316C27"
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
                      "href": "docs/sf__graphics___spec.html#L32C9"
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
                      "text": "Sf.Graphics.Color.sfColor",
                      "href": "docs/sf__graphics__color___spec.html#L33C9"
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
                  "text": " Get the fill color of a convex shape\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "shape",
              "line": 316,
              "column": 27,
              "type": {
                "label": "Sf.Graphics.sfConvexShape_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L32C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Shape object\n"
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
                    "text": "Fill color of the shape\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "getGlobalBounds",
          "qualifier": "",
          "line": 421,
          "column": 13,
          "src": "srcs/sf-graphics-convexshape.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 421,
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
                      "text": "getGlobalBounds",
                      "href": "docs/sf__graphics__convexshape___spec.html#L421C13"
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
                      "text": "shape",
                      "href": "docs/sf__graphics__convexshape___spec.html#L421C30"
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
                      "href": "docs/sf__graphics___spec.html#L32C9"
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
                      "text": "Sf.Graphics.Rect.sfFloatRect",
                      "href": "docs/sf__graphics__rect___spec.html#L28C9"
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
                  "text": " Get the global bounding rectangle of a convex shape\n"
                },
                {
                  "kind": "span",
                  "text": "The returned rectangle is in global coordinates, which means\n"
                },
                {
                  "kind": "span",
                  "text": "that it takes in account the transformations (translation,\n"
                },
                {
                  "kind": "span",
                  "text": "rotation, scale, ...) that are applied to the entity.\n"
                },
                {
                  "kind": "span",
                  "text": "In other words, this function returns the bounds of the\n"
                },
                {
                  "kind": "span",
                  "text": "sprite in the global 2D world's coordinate system.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "shape",
              "line": 421,
              "column": 30,
              "type": {
                "label": "Sf.Graphics.sfConvexShape_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L32C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Shape object\n"
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
                    "text": "Global bounding rectangle of the entity\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "getInverseTransform",
          "qualifier": "",
          "line": 204,
          "column": 13,
          "src": "srcs/sf-graphics-convexshape.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 204,
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
                      "text": "getInverseTransform",
                      "href": "docs/sf__graphics__convexshape___spec.html#L204C13"
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
                      "text": "shape",
                      "href": "docs/sf__graphics__convexshape___spec.html#L204C34"
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
                      "href": "docs/sf__graphics___spec.html#L32C9"
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
                      "text": "Sf.Graphics.Transform.sfTransform",
                      "href": "docs/sf__graphics__transform___spec.html#L28C9"
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
                  "text": " Get the inverse of the combined transform of a convex shape\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "shape",
              "line": 204,
              "column": 34,
              "type": {
                "label": "Sf.Graphics.sfConvexShape_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L32C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "shape object\n"
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
                    "text": "Inverse of the combined transformations applied to the object\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "getLocalBounds",
          "qualifier": "",
          "line": 405,
          "column": 13,
          "src": "srcs/sf-graphics-convexshape.ads.html",
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
                      "text": "getLocalBounds",
                      "href": "docs/sf__graphics__convexshape___spec.html#L405C13"
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
                      "text": "shape",
                      "href": "docs/sf__graphics__convexshape___spec.html#L405C29"
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
                      "href": "docs/sf__graphics___spec.html#L32C9"
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
                      "text": "Sf.Graphics.Rect.sfFloatRect",
                      "href": "docs/sf__graphics__rect___spec.html#L28C9"
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
                  "text": " Get the local bounding rectangle of a convex shape\n"
                },
                {
                  "kind": "span",
                  "text": "The returned rectangle is in local coordinates, which means\n"
                },
                {
                  "kind": "span",
                  "text": "that it ignores the transformations (translation, rotation,\n"
                },
                {
                  "kind": "span",
                  "text": "scale, ...) that are applied to the entity.\n"
                },
                {
                  "kind": "span",
                  "text": "In other words, this function returns the bounds of the\n"
                },
                {
                  "kind": "span",
                  "text": "entity in the entity's coordinate system.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "shape",
              "line": 405,
              "column": 29,
              "type": {
                "label": "Sf.Graphics.sfConvexShape_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L32C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Shape object\n"
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
                    "text": "Local bounding rectangle of the entity\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "getOrigin",
          "qualifier": "",
          "line": 148,
          "column": 13,
          "src": "srcs/sf-graphics-convexshape.ads.html",
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
                      "text": "getOrigin",
                      "href": "docs/sf__graphics__convexshape___spec.html#L148C13"
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
                      "text": "shape",
                      "href": "docs/sf__graphics__convexshape___spec.html#L148C24"
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
                      "href": "docs/sf__graphics___spec.html#L32C9"
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
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": " Get the local origin of a convex shape\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "shape",
              "line": 148,
              "column": 24,
              "type": {
                "label": "Sf.Graphics.sfConvexShape_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L32C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Shape object\n"
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
                    "text": "Current origin\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "getOutlineColor",
          "qualifier": "",
          "line": 326,
          "column": 13,
          "src": "srcs/sf-graphics-convexshape.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 326,
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
                      "text": "getOutlineColor",
                      "href": "docs/sf__graphics__convexshape___spec.html#L326C13"
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
                      "text": "shape",
                      "href": "docs/sf__graphics__convexshape___spec.html#L326C30"
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
                      "href": "docs/sf__graphics___spec.html#L32C9"
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
                      "text": "Sf.Graphics.Color.sfColor",
                      "href": "docs/sf__graphics__color___spec.html#L33C9"
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
                  "text": " Get the outline color of a convex shape\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "shape",
              "line": 326,
              "column": 30,
              "type": {
                "label": "Sf.Graphics.sfConvexShape_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L32C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Shape object\n"
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
                    "text": "Outline color of the shape\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "getOutlineThickness",
          "qualifier": "",
          "line": 336,
          "column": 13,
          "src": "srcs/sf-graphics-convexshape.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 336,
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
                      "text": "getOutlineThickness",
                      "href": "docs/sf__graphics__convexshape___spec.html#L336C13"
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
                      "text": "shape",
                      "href": "docs/sf__graphics__convexshape___spec.html#L336C34"
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
                      "href": "docs/sf__graphics___spec.html#L32C9"
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
                      "text": "float"
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
                  "text": " Get the outline thickness of a convex shape\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "shape",
              "line": 336,
              "column": 34,
              "type": {
                "label": "Sf.Graphics.sfConvexShape_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L32C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Shape object\n"
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
                    "text": "Outline thickness of the shape\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "getPoint",
          "qualifier": "",
          "line": 359,
          "column": 13,
          "src": "srcs/sf-graphics-convexshape.ads.html",
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
                      "text": "getPoint",
                      "href": "docs/sf__graphics__convexshape___spec.html#L359C13"
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
                      "text": "shape",
                      "href": "docs/sf__graphics__convexshape___spec.html#L359C23"
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
                      "href": "docs/sf__graphics___spec.html#L32C9"
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
                      "text": "index",
                      "href": "docs/sf__graphics__convexshape___spec.html#L359C50"
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
                      "href": "docs/sf___spec.html#L124C9"
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
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": " Get a point of a convex shape\n"
                },
                {
                  "kind": "span",
                  "text": "The result is undefined if @a index is out of the valid range.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "shape",
              "line": 359,
              "column": 23,
              "type": {
                "label": "Sf.Graphics.sfConvexShape_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L32C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Shape object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "index",
              "line": 359,
              "column": 50,
              "type": {
                "label": "Sf.sfSize_t",
                "docHref": "docs/sf___spec.html#L124C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Index of the point to get, in range [0 .. getPointCount() - 1]\n"
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
                    "text": "Index-th point of the shape\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "getPointCount",
          "qualifier": "",
          "line": 346,
          "column": 13,
          "src": "srcs/sf-graphics-convexshape.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 346,
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
                      "text": "getPointCount",
                      "href": "docs/sf__graphics__convexshape___spec.html#L346C13"
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
                      "text": "shape",
                      "href": "docs/sf__graphics__convexshape___spec.html#L346C28"
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
                      "href": "docs/sf__graphics___spec.html#L32C9"
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
                      "href": "docs/sf___spec.html#L124C9"
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
                  "text": " Get the total number of points of a convex shape\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "shape",
              "line": 346,
              "column": 28,
              "type": {
                "label": "Sf.Graphics.sfConvexShape_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L32C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Shape object\n"
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
                    "text": "Number of points of the shape\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "getPosition",
          "qualifier": "",
          "line": 116,
          "column": 13,
          "src": "srcs/sf-graphics-convexshape.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 116,
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
                      "href": "docs/sf__graphics__convexshape___spec.html#L116C13"
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
                      "text": "shape",
                      "href": "docs/sf__graphics__convexshape___spec.html#L116C26"
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
                      "href": "docs/sf__graphics___spec.html#L32C9"
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
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": " Get the position of a convex shape\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "shape",
              "line": 116,
              "column": 26,
              "type": {
                "label": "Sf.Graphics.sfConvexShape_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L32C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Shape object\n"
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
                    "text": "Current position\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "getRotation",
          "qualifier": "",
          "line": 128,
          "column": 13,
          "src": "srcs/sf-graphics-convexshape.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 128,
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
                      "text": "getRotation",
                      "href": "docs/sf__graphics__convexshape___spec.html#L128C13"
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
                      "text": "shape",
                      "href": "docs/sf__graphics__convexshape___spec.html#L128C26"
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
                      "href": "docs/sf__graphics___spec.html#L32C9"
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
                      "text": "float"
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
                  "text": " Get the orientation of a convex shape\n"
                },
                {
                  "kind": "span",
                  "text": "The rotation is always in the range [0, 360].\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "shape",
              "line": 128,
              "column": 26,
              "type": {
                "label": "Sf.Graphics.sfConvexShape_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L32C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Shape object\n"
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
                    "text": "Current rotation, in degrees\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "getScale",
          "qualifier": "",
          "line": 138,
          "column": 13,
          "src": "srcs/sf-graphics-convexshape.ads.html",
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
                      "text": "getScale",
                      "href": "docs/sf__graphics__convexshape___spec.html#L138C13"
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
                      "text": "shape",
                      "href": "docs/sf__graphics__convexshape___spec.html#L138C23"
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
                      "href": "docs/sf__graphics___spec.html#L32C9"
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
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": " Get the current scale of a convex shape\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "shape",
              "line": 138,
              "column": 23,
              "type": {
                "label": "Sf.Graphics.sfConvexShape_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L32C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Shape object\n"
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
                    "text": "Current scale factors\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "getTexture",
          "qualifier": "",
          "line": 296,
          "column": 13,
          "src": "srcs/sf-graphics-convexshape.ads.html",
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
                      "href": "docs/sf__graphics__convexshape___spec.html#L296C13"
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
                      "text": "shape",
                      "href": "docs/sf__graphics__convexshape___spec.html#L296C25"
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
                      "href": "docs/sf__graphics___spec.html#L32C9"
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
                      "href": "docs/sf__graphics___spec.html#L62C9"
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
                  "text": " Get the source texture of a convex shape\n"
                },
                {
                  "kind": "span",
                  "text": "If the shape has no source texture, a NULL pointer is returned.\n"
                },
                {
                  "kind": "span",
                  "text": "The returned pointer is const, which means that you can't\n"
                },
                {
                  "kind": "span",
                  "text": "modify the texture when you retrieve it with this function.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "shape",
              "line": 296,
              "column": 25,
              "type": {
                "label": "Sf.Graphics.sfConvexShape_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L32C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Shape object\n"
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
                    "text": "Pointer to the shape's texture\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "getTextureRect",
          "qualifier": "",
          "line": 306,
          "column": 13,
          "src": "srcs/sf-graphics-convexshape.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 306,
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
                      "text": "getTextureRect",
                      "href": "docs/sf__graphics__convexshape___spec.html#L306C13"
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
                      "text": "shape",
                      "href": "docs/sf__graphics__convexshape___spec.html#L306C29"
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
                      "href": "docs/sf__graphics___spec.html#L32C9"
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
                  "kind": "span",
                  "text": "\n"
                },
                {
                  "kind": "span",
                  "text": " Get the sub-rectangle of the texture displayed by a convex shape\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "shape",
              "line": 306,
              "column": 29,
              "type": {
                "label": "Sf.Graphics.sfConvexShape_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L32C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Shape object\n"
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
                    "text": "Texture rectangle of the shape\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "getTransform",
          "qualifier": "",
          "line": 194,
          "column": 13,
          "src": "srcs/sf-graphics-convexshape.ads.html",
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
                      "text": "getTransform",
                      "href": "docs/sf__graphics__convexshape___spec.html#L194C13"
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
                      "text": "shape",
                      "href": "docs/sf__graphics__convexshape___spec.html#L194C27"
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
                      "href": "docs/sf__graphics___spec.html#L32C9"
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
                      "text": "Sf.Graphics.Transform.sfTransform",
                      "href": "docs/sf__graphics__transform___spec.html#L28C9"
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
                  "text": " Get the combined transform of a convex shape\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "shape",
              "line": 194,
              "column": 27,
              "type": {
                "label": "Sf.Graphics.sfConvexShape_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L32C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "shape object\n"
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
                    "text": "Transform combining the position/rotation/scale/origin of the object\n"
                  }
                ]
              }
            ]
          }
        },
        {
          "label": "move",
          "qualifier": "",
          "line": 160,
          "column": 14,
          "src": "srcs/sf-graphics-convexshape.ads.html",
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
                      "text": "move",
                      "href": "docs/sf__graphics__convexshape___spec.html#L160C14"
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
                      "text": "shape",
                      "href": "docs/sf__graphics__convexshape___spec.html#L160C20"
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
                      "href": "docs/sf__graphics___spec.html#L32C9"
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
                      "text": "offset",
                      "href": "docs/sf__graphics__convexshape___spec.html#L160C47"
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
                  "text": " Move a convex shape by a given offset\n"
                },
                {
                  "kind": "span",
                  "text": "This function adds to the current position of the object,\n"
                },
                {
                  "kind": "span",
                  "text": "unlike sfConvexShape_setPosition which overwrites it.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "shape",
              "line": 160,
              "column": 20,
              "type": {
                "label": "Sf.Graphics.sfConvexShape_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L32C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Shape object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "offset",
              "line": 160,
              "column": 47,
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
                      "text": "Offset\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "rotate",
          "qualifier": "",
          "line": 172,
          "column": 14,
          "src": "srcs/sf-graphics-convexshape.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 172,
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
                      "text": "rotate",
                      "href": "docs/sf__graphics__convexshape___spec.html#L172C14"
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
                      "text": "shape",
                      "href": "docs/sf__graphics__convexshape___spec.html#L172C22"
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
                      "href": "docs/sf__graphics___spec.html#L32C9"
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
                      "text": "angle",
                      "href": "docs/sf__graphics__convexshape___spec.html#L172C49"
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
                      "text": "float"
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
                  "text": " Rotate a convex shape\n"
                },
                {
                  "kind": "span",
                  "text": "This function adds to the current rotation of the object,\n"
                },
                {
                  "kind": "span",
                  "text": "unlike sfConvexShape_setRotation which overwrites it.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "shape",
              "line": 172,
              "column": 22,
              "type": {
                "label": "Sf.Graphics.sfConvexShape_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L32C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Shape object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "angle",
              "line": 172,
              "column": 49,
              "type": {
                "label": "Float"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Angle of rotation, in degrees\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "scale",
          "qualifier": "",
          "line": 184,
          "column": 14,
          "src": "srcs/sf-graphics-convexshape.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 184,
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
                      "text": "scale",
                      "href": "docs/sf__graphics__convexshape___spec.html#L184C14"
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
                      "text": "shape",
                      "href": "docs/sf__graphics__convexshape___spec.html#L184C21"
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
                      "href": "docs/sf__graphics___spec.html#L32C9"
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
                      "text": "factors",
                      "href": "docs/sf__graphics__convexshape___spec.html#L184C48"
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
                  "text": " Scale a convex shape\n"
                },
                {
                  "kind": "span",
                  "text": "This function multiplies the current scale of the object,\n"
                },
                {
                  "kind": "span",
                  "text": "unlike sfConvexShape_setScale which overwrites it.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "shape",
              "line": 184,
              "column": 21,
              "type": {
                "label": "Sf.Graphics.sfConvexShape_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L32C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Shape object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "factors",
              "line": 184,
              "column": 48,
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
                      "text": "Scale factors\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "setFillColor",
          "qualifier": "",
          "line": 257,
          "column": 14,
          "src": "srcs/sf-graphics-convexshape.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 257,
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
                      "text": "setFillColor",
                      "href": "docs/sf__graphics__convexshape___spec.html#L257C14"
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
                      "text": "shape",
                      "href": "docs/sf__graphics__convexshape___spec.html#L257C28"
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
                      "href": "docs/sf__graphics___spec.html#L32C9"
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
                      "href": "docs/sf__graphics__convexshape___spec.html#L257C55"
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
                  "text": " Set the fill color of a convex shape\n"
                },
                {
                  "kind": "span",
                  "text": "This color is modulated (multiplied) with the shape's\n"
                },
                {
                  "kind": "span",
                  "text": "texture if any. It can be used to colorize the shape,\n"
                },
                {
                  "kind": "span",
                  "text": "or change its global opacity.\n"
                },
                {
                  "kind": "span",
                  "text": "You can use sfTransparent to make the inside of\n"
                },
                {
                  "kind": "span",
                  "text": "the shape transparent, and have the outline alone.\n"
                },
                {
                  "kind": "span",
                  "text": "By default, the shape's fill color is opaque white.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "shape",
              "line": 257,
              "column": 28,
              "type": {
                "label": "Sf.Graphics.sfConvexShape_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L32C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Shape object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "color",
              "line": 257,
              "column": 55,
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
                      "text": "New color of the shape\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "setOrigin",
          "qualifier": "",
          "line": 106,
          "column": 14,
          "src": "srcs/sf-graphics-convexshape.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 106,
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
                      "text": "setOrigin",
                      "href": "docs/sf__graphics__convexshape___spec.html#L106C14"
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
                      "text": "shape",
                      "href": "docs/sf__graphics__convexshape___spec.html#L106C25"
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
                      "href": "docs/sf__graphics___spec.html#L32C9"
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
                      "text": "origin",
                      "href": "docs/sf__graphics__convexshape___spec.html#L106C52"
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
                  "text": " Set the local origin of a convex shape\n"
                },
                {
                  "kind": "span",
                  "text": "The origin of an object defines the center point for\n"
                },
                {
                  "kind": "span",
                  "text": "all transformations (position, scale, rotation).\n"
                },
                {
                  "kind": "span",
                  "text": "The coordinates of this point must be relative to the\n"
                },
                {
                  "kind": "span",
                  "text": "top-left corner of the object, and ignore all\n"
                },
                {
                  "kind": "span",
                  "text": "transformations (position, scale, rotation).\n"
                },
                {
                  "kind": "span",
                  "text": "The default origin of a circle Shape object is (0, 0).\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "shape",
              "line": 106,
              "column": 25,
              "type": {
                "label": "Sf.Graphics.sfConvexShape_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L32C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Shape object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "origin",
              "line": 106,
              "column": 52,
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
                      "text": "New origin\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "setOutlineColor",
          "qualifier": "",
          "line": 269,
          "column": 14,
          "src": "srcs/sf-graphics-convexshape.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 269,
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
                      "text": "setOutlineColor",
                      "href": "docs/sf__graphics__convexshape___spec.html#L269C14"
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
                      "text": "shape",
                      "href": "docs/sf__graphics__convexshape___spec.html#L269C31"
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
                      "href": "docs/sf__graphics___spec.html#L32C9"
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
                      "href": "docs/sf__graphics__convexshape___spec.html#L269C58"
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
                  "text": " Set the outline color of a convex shape\n"
                },
                {
                  "kind": "span",
                  "text": "You can use sfTransparent to disable the outline.\n"
                },
                {
                  "kind": "span",
                  "text": "By default, the shape's outline color is opaque white.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "shape",
              "line": 269,
              "column": 31,
              "type": {
                "label": "Sf.Graphics.sfConvexShape_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L32C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Shape object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "color",
              "line": 269,
              "column": 58,
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
                      "text": "New outline color of the shape\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "setOutlineThickness",
          "qualifier": "",
          "line": 282,
          "column": 14,
          "src": "srcs/sf-graphics-convexshape.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 282,
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
                      "text": "setOutlineThickness",
                      "href": "docs/sf__graphics__convexshape___spec.html#L282C14"
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
                      "text": "shape",
                      "href": "docs/sf__graphics__convexshape___spec.html#L282C35"
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
                      "href": "docs/sf__graphics___spec.html#L32C9"
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
                      "text": "thickness",
                      "href": "docs/sf__graphics__convexshape___spec.html#L282C62"
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
                      "text": "float"
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
                  "text": " Set the thickness of a convex shape's outline\n"
                },
                {
                  "kind": "span",
                  "text": "This number cannot be negative. Using zero disables\n"
                },
                {
                  "kind": "span",
                  "text": "the outline.\n"
                },
                {
                  "kind": "span",
                  "text": "By default, the outline thickness is 0.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "shape",
              "line": 282,
              "column": 35,
              "type": {
                "label": "Sf.Graphics.sfConvexShape_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L32C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Shape object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "thickness",
              "line": 282,
              "column": 62,
              "type": {
                "label": "Float"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "New outline thickness\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "setPoint",
          "qualifier": "",
          "line": 386,
          "column": 14,
          "src": "srcs/sf-graphics-convexshape.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 386,
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
                      "text": "setPoint",
                      "href": "docs/sf__graphics__convexshape___spec.html#L386C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 387,
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
                      "text": "shape",
                      "href": "docs/sf__graphics__convexshape___spec.html#L387C7"
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
                  "number": 388,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "index",
                      "href": "docs/sf__graphics__convexshape___spec.html#L388C7"
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
                      "href": "docs/sf___spec.html#L124C9"
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
                  "number": 389,
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
                      "href": "docs/sf__graphics__convexshape___spec.html#L389C7"
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
                  "text": " Set the position of a point in a convex shape\n"
                },
                {
                  "kind": "span",
                  "text": "Don't forget that the polygon must remain convex, and\n"
                },
                {
                  "kind": "span",
                  "text": "the points need to stay ordered!\n"
                },
                {
                  "kind": "span",
                  "text": "setPointCount must be called first in order to set the total\n"
                },
                {
                  "kind": "span",
                  "text": "number of points. The result is undefined if @a index is out\n"
                },
                {
                  "kind": "span",
                  "text": "of the valid range.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "shape",
              "line": 387,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfConvexShape_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L32C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Shape object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "index",
              "line": 388,
              "column": 7,
              "type": {
                "label": "Sf.sfSize_t",
                "docHref": "docs/sf___spec.html#L124C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Index of the point to change, in range [0 .. GetPointCount() - 1]\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "point",
              "line": 389,
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
                      "text": "New point\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "setPointCount",
          "qualifier": "",
          "line": 370,
          "column": 14,
          "src": "srcs/sf-graphics-convexshape.ads.html",
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
                      "text": "setPointCount",
                      "href": "docs/sf__graphics__convexshape___spec.html#L370C14"
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
                      "text": "shape",
                      "href": "docs/sf__graphics__convexshape___spec.html#L370C29"
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
                      "href": "docs/sf__graphics___spec.html#L32C9"
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
                      "text": "count",
                      "href": "docs/sf__graphics__convexshape___spec.html#L370C56"
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
                      "href": "docs/sf___spec.html#L124C9"
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
                  "text": " Set the number of points of a convex shap\n"
                },
                {
                  "kind": "span",
                  "text": "@a count must be greater than 2 to define a valid shape.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "shape",
              "line": 370,
              "column": 29,
              "type": {
                "label": "Sf.Graphics.sfConvexShape_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L32C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Shape object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "count",
              "line": 370,
              "column": 56,
              "type": {
                "label": "Sf.sfSize_t",
                "docHref": "docs/sf___spec.html#L124C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "New number of points of the shape\n"
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
          "line": 64,
          "column": 14,
          "src": "srcs/sf-graphics-convexshape.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 64,
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
                      "href": "docs/sf__graphics__convexshape___spec.html#L64C14"
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
                      "text": "shape",
                      "href": "docs/sf__graphics__convexshape___spec.html#L64C27"
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
                      "href": "docs/sf__graphics___spec.html#L32C9"
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
                      "href": "docs/sf__graphics__convexshape___spec.html#L64C54"
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
                  "text": " Set the position of a convex shape\n"
                },
                {
                  "kind": "span",
                  "text": "This function completely overwrites the previous position.\n"
                },
                {
                  "kind": "span",
                  "text": "See sfConvexShape_move to apply an offset based on the previous position instead.\n"
                },
                {
                  "kind": "span",
                  "text": "The default position of a circle Shape object is (0, 0).\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "shape",
              "line": 64,
              "column": 27,
              "type": {
                "label": "Sf.Graphics.sfConvexShape_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L32C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Shape object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "position",
              "line": 64,
              "column": 54,
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
                      "text": "New position\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "setRotation",
          "qualifier": "",
          "line": 77,
          "column": 14,
          "src": "srcs/sf-graphics-convexshape.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 77,
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
                      "text": "setRotation",
                      "href": "docs/sf__graphics__convexshape___spec.html#L77C14"
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
                      "text": "shape",
                      "href": "docs/sf__graphics__convexshape___spec.html#L77C27"
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
                      "href": "docs/sf__graphics___spec.html#L32C9"
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
                      "text": "angle",
                      "href": "docs/sf__graphics__convexshape___spec.html#L77C54"
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
                      "text": "float"
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
                  "text": " Set the orientation of a convex shape\n"
                },
                {
                  "kind": "span",
                  "text": "This function completely overwrites the previous rotation.\n"
                },
                {
                  "kind": "span",
                  "text": "See sfConvexShape_rotate to add an angle based on the previous rotation instead.\n"
                },
                {
                  "kind": "span",
                  "text": "The default rotation of a circle Shape object is 0.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "shape",
              "line": 77,
              "column": 27,
              "type": {
                "label": "Sf.Graphics.sfConvexShape_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L32C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Shape object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "angle",
              "line": 77,
              "column": 54,
              "type": {
                "label": "Float"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "New rotation, in degrees\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "setScale",
          "qualifier": "",
          "line": 90,
          "column": 14,
          "src": "srcs/sf-graphics-convexshape.ads.html",
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
                      "text": "setScale",
                      "href": "docs/sf__graphics__convexshape___spec.html#L90C14"
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
                      "text": "shape",
                      "href": "docs/sf__graphics__convexshape___spec.html#L90C24"
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
                      "href": "docs/sf__graphics___spec.html#L32C9"
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
                      "text": "scale",
                      "href": "docs/sf__graphics__convexshape___spec.html#L90C51"
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
                  "text": " Set the scale factors of a convex shape\n"
                },
                {
                  "kind": "span",
                  "text": "This function completely overwrites the previous scale.\n"
                },
                {
                  "kind": "span",
                  "text": "See sfConvexShape_scale to add a factor based on the previous scale instead.\n"
                },
                {
                  "kind": "span",
                  "text": "The default scale of a circle Shape object is (1, 1).\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "shape",
              "line": 90,
              "column": 24,
              "type": {
                "label": "Sf.Graphics.sfConvexShape_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L32C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Shape object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "scale",
              "line": 90,
              "column": 51,
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
                      "text": "New scale factors\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "setTexture",
          "qualifier": "",
          "line": 225,
          "column": 14,
          "src": "srcs/sf-graphics-convexshape.ads.html",
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
                      "text": "setTexture",
                      "href": "docs/sf__graphics__convexshape___spec.html#L225C14"
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
                      "text": "shape",
                      "href": "docs/sf__graphics__convexshape___spec.html#L226C7"
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
                  "number": 227,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "texture",
                      "href": "docs/sf__graphics__convexshape___spec.html#L227C7"
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
                      "text": "resetRect",
                      "href": "docs/sf__graphics__convexshape___spec.html#L228C7"
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
                      "href": "docs/sf___spec.html#L68C9"
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
                  "text": " Change the source texture of a convex shape\n"
                },
                {
                  "kind": "span",
                  "text": "The @a texture argument refers to a texture that must\n"
                },
                {
                  "kind": "span",
                  "text": "exist as long as the shape uses it. Indeed, the shape\n"
                },
                {
                  "kind": "span",
                  "text": "doesn't store its own copy of the texture, but rather keeps\n"
                },
                {
                  "kind": "span",
                  "text": "a pointer to the one that you passed to this function.\n"
                },
                {
                  "kind": "span",
                  "text": "If the source texture is destroyed and the shape tries to\n"
                },
                {
                  "kind": "span",
                  "text": "use it, the behaviour is undefined.\n"
                },
                {
                  "kind": "span",
                  "text": "@a texture can be NULL to disable texturing.\n"
                },
                {
                  "kind": "span",
                  "text": "If @a resetRect is true, the TextureRect property of\n"
                },
                {
                  "kind": "span",
                  "text": "the shape is automatically adjusted to the size of the new\n"
                },
                {
                  "kind": "span",
                  "text": "texture. If it is false, the texture rect is left unchanged.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "shape",
              "line": 226,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfConvexShape_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L32C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Shape object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "texture",
              "line": 227,
              "column": 7,
              "type": {
                "label": "Sf.Graphics.sfConvexShape_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L32C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "New texture\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "resetRect",
              "line": 228,
              "column": 7,
              "type": {
                "label": "Sf.sfBool",
                "docHref": "docs/sf___spec.html#L68C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Should the texture rect be reset to the size of the new texture?\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "setTextureRect",
          "qualifier": "",
          "line": 241,
          "column": 14,
          "src": "srcs/sf-graphics-convexshape.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 241,
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
                      "text": "setTextureRect",
                      "href": "docs/sf__graphics__convexshape___spec.html#L241C14"
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
                      "text": "shape",
                      "href": "docs/sf__graphics__convexshape___spec.html#L241C30"
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
                      "href": "docs/sf__graphics___spec.html#L32C9"
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
                      "text": "rect",
                      "href": "docs/sf__graphics__convexshape___spec.html#L241C57"
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
                      "text": "Sf.Graphics.Rect.sfIntRect",
                      "href": "docs/sf__graphics__rect___spec.html#L35C9"
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
                  "text": " Set the sub-rectangle of the texture that a convex shape will display\n"
                },
                {
                  "kind": "span",
                  "text": "The texture rect is useful when you don't want to display\n"
                },
                {
                  "kind": "span",
                  "text": "the whole texture, but rather a part of it.\n"
                },
                {
                  "kind": "span",
                  "text": "By default, the texture rect covers the entire texture.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "shape",
              "line": 241,
              "column": 30,
              "type": {
                "label": "Sf.Graphics.sfConvexShape_Ptr",
                "docHref": "docs/sf__graphics___spec.html#L32C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Shape object\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "rect",
              "line": 241,
              "column": 57,
              "type": {
                "label": "Sf.Graphics.Rect.sfIntRect",
                "docHref": "docs/sf__graphics__rect___spec.html#L35C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Rectangle defining the region of the texture to display\n"
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