module Main exposing (main)

import Browser
import Html exposing (..)
import Ui exposing (..)


main =
    page True
        [ header [ isOdd ] [ textSpan "Unitatea II", textSpan "De-a ce mă joc", textSpan "Lectură" ]
        , footer [] [ text "51" ]
        ]
