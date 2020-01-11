module Main exposing (main)

import Browser
import Html exposing (..)
import Ui exposing (..)


page51 =
    let
        content =
            div [] [ text "content" ]
    in
    page
        { isOdd = True
        , unit = "Unitatea II"
        , details = "De-a ce mă joc"
        , activity = "Lectură"
        , no = 51
        , content = content
        }


main =
    page51
