module Main exposing (main)

import Browser
import Html exposing (..)
import Html.Attributes exposing (..)
import Ui exposing (..)


page51Box1 =
    stack
        [ box
            { color = "purple"
            , title = "Explorare"
            , content =
                div []
                    [ ol []
                        [ li []
                            [ span []
                                [ text "Grupează ideile din rubrica "
                                , em [] [ text "Explorare" ]
                                , text " (pagina 49) într-un plan simplu, urmărind sugestiile din tabel"
                                ]
                            , div [ style "padding" "var(--s-1)" ]
                                [ stackSmall
                                    [ row
                                        [ div [ class "col-3" ]
                                            [ span [ class "box-color" ] [ text "Precizează cum începe acțiunea.", br [] [], text "(Cine? Ce face? Unde? Când?)" ]
                                            ]
                                        , div [ class "col-9 d-flex align-items-center" ] [ input [ type_ "text", value "Un domn vine în vizită la doamna Popescu cu ocazia onomasticii fiului ei." ] [] ]
                                        ]
                                    , row
                                        [ div [ class "col-3" ]
                                            [ div [ class "box-color" ]
                                                [ span [] [ text "Prezintă ce se întâmplă:" ]
                                                , ul []
                                                    [ li [] [ text "cum se declanșează acțiunea;" ]
                                                    , li [] [ text "cum se desfășoară acțiunea;" ]
                                                    , li [] [ text "cum sunt depășite complicațiile" ]
                                                    ]
                                                ]
                                            ]
                                        , div [ class "col-9 d-flex align-items-center" ] [ textarea [] [] ]
                                        ]
                                    , row
                                        [ div [ class "col-3" ]
                                            [ span [ class "box-color" ] [ text "Notează finalul întâmplării." ]
                                            ]
                                        , div [ class "col-9 d-flex align-items-center" ] [ input [ type_ "text" ] [] ]
                                        ]
                                    ]
                                ]
                            ]
                        , li []
                            [ text "Formulează o idee care să completeze, prin detalii, prima idee principală de la exercițiul anterior." ]
                        ]
                    ]
            }
        , box
            { color = "orange"
            , title = "Repere"
            , content =
                div []
                    [ p [] [ span [ class "box-color" ] [ text "Ideile secundare" ], text " prezintă amănunte legate de ideea principală, completând-o." ]
                    , p [] [ span [ class "box-color" ] [ text "Planul dezvoltat de idei" ], text " cuprinde ideile principale și ideile secundare corespunzătoare acestora, în ordinea în care apar în text." ]
                    ]
            }
        , box
            { color = "green"
            , title = "Repere"
            , content =
                p [] [ text " Lucrați în grupe de câte 4 – 5 elevi. Schițați o bandă desenată în care să surprindeți cele mai importante secvențe ale schiței ", em [] [ text "Vizită" ], text "...." ]
            }
        ]


page51 =
    let
        content =
            div []
                [ h2 [ style "color" "var(--color-orange)" ] [ strongText "Lecția 3.", text " Planul dezvoltat de idei" ]
                , page51Box1
                ]
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
