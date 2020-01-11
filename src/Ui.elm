module Ui exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Json.Encode as JEnc


role =
    attribute "role"


page { isOdd, unit, details, activity, no, content } =
    div [ role "page", dataIsOdd isOdd ]
        [ pageHeader unit details activity
        , content
        , pageNo no
        ]


textSpan txt =
    span [] [ text txt ]


pageNo : Int -> Html msg
pageNo no =
    footer [] [ text (String.fromInt no) ]


pageHeader : String -> String -> String -> Html msg
pageHeader unit details activity =
    header [] [ textSpan unit, textSpan details, textSpan activity ]


dataIsOdd : Bool -> Attribute msg
dataIsOdd isOdd =
    if isOdd then
        attribute "data-is-odd" ""

    else
        attribute "data-is-odd" "false"
