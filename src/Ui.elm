module Ui exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)


role =
    attribute "role"


page odd =
    if odd then
        div [ role "page", isOdd ]

    else
        div [ role "page" ]


textSpan txt =
    span [] [ text txt ]


isOdd =
    attribute "data-is-odd" ""
