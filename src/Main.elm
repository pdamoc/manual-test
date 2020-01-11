module Main exposing (main)

import Browser
import Html exposing (..)
import Html.Attributes exposing (..)
import Ui exposing (..)


page51Box1 =
    box
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


page51Box2 =
    let
        rowSpacer =
            row [ div [ style "height" "var(--s1)" ] [] ]

        firstColumn txt hasArrow =
            div [ class "col-2 pr-0" ]
                [ div
                    [ classList [ ( "text-align:center height:100%", True ), ( "down-arrow-blue", hasArrow ) ]
                    , style "color" "#fff"
                    , style "background-color" "var(--color-orange-mid)"
                    , style "padding" "var(--s0)"
                    ]
                    [ strongText txt ]
                ]

        blueBox =
            div
                [ class "height:100%"
                , style "color" "var(--color-blue)"
                , style "background-color" "var(--color-blue-mid-light)"
                , style "padding" "var(--s0)"
                ]
    in
    box
        { color = "blue"
        , title = "Aplicații"
        , content =
            div []
                [ ol []
                    [ li []
                        [ span []
                            [ text "Alcătuiește planul dezvoltat de idei, adăugând detalii pentru fiecare idee principală din planul simplu."
                            ]
                        , div [ style "padding" "var(--s-1)", style "padding-left" "var(--s0)", style "margin-bottom" "var(--s0)" ]
                            [ row
                                [ div [ class "col-2 pr-0" ] []
                                , div [ class "col-5 pl-0" ]
                                    [ div [ class "text-align:center", style "color" "#fff", style "background-color" "var(--color-orange-mid)" ] [ strongText "Planul simplu de idei" ] ]
                                , div [ class "col-5 text-align:center", style "color" "#fff", style "background-color" "var(--color-orange-mid)" ]
                                    [ div [ class "text-align:center", style "color" "#fff", style "background-color" "var(--color-orange-mid)" ] [ strongText "Planul dezvoltat de idei" ] ]
                                ]
                            , row
                                [ firstColumn "Situația inițială" True
                                , div [ class "col-5 pl-0" ] [ blueBox [ text "Un domn vine în vizită la doamna Popescu cu ocazia onomasticii fiului ei." ] ]
                                , div [ class "col-5 p-0" ]
                                    [ blueBox
                                        [ text "Un domn vine în vizită la doamna Popescu cu ocazia onomasticii fiului ei."
                                        , span [ style "color" "var(--color-dark)" ] [ text " Musafirul îi oferă lui Ionel o minge și începe să discute cu gazda.." ]
                                        ]
                                    ]
                                ]
                            , rowSpacer
                            , row
                                [ firstColumn "Succesiunea de întâmplări" True
                                , div [ class "col-5 pl-0" ] [ blueBox [] ]
                                , div [ class "col-5 p-0" ] [ blueBox [] ]
                                ]
                            , rowSpacer
                            , row
                                [ firstColumn "Situația finală" False
                                , div [ class "col-5 pl-0" ] [ blueBox [] ]
                                , div [ class "col-5 p-0" ] [ blueBox [] ]
                                ]
                            ]
                        ]
                    , li []
                        [ span [] [ text "Evaluează planul dezvoltat al colegului/colegei de bancă, pe baza următoarelor criterii:" ]
                        , div [ style "padding" "var(--s-1)" ]
                            [ table [ attribute "data-color" "blue" ]
                                [ tr [] [ th [] [ text "Criterii" ], th [] [ text "Da" ], th [] [ text "Nu" ] ]
                                , tr [] [ td [] [ text "A fost dezvoltată fiecare idee principală, adăugându-se detalii relevante." ], td [] [], td [] [] ]
                                , tr [] [ td [] [ text "A fost respectată ordinea în care apar în text ideile principale și secundare." ], td [] [], td [] [] ]
                                , tr [] [ td [] [ text "Exprimarea este clară și corectă, fără greșeli gramaticale, de ortografie sau de punctuație." ], td [] [], td [] [] ]
                                ]
                            ]
                        ]
                    ]
                ]
        }


page51Box3 =
    box
        { color = "orange"
        , title = "Repere"
        , content =
            div []
                [ p [] [ span [ class "box-color" ] [ text "Ideile secundare" ], text " prezintă amănunte legate de ideea principală, completând-o." ]
                , p [] [ span [ class "box-color" ] [ text "Planul dezvoltat de idei" ], text " cuprinde ideile principale și ideile secundare corespunzătoare acestora, în ordinea în care apar în text." ]
                ]
        }


page51Box4 =
    box
        { color = "green"
        , title = "Repere"
        , content =
            p [] [ text " Lucrați în grupe de câte 4 – 5 elevi. Schițați o bandă desenată în care să surprindeți cele mai importante secvențe ale schiței ", em [] [ text "Vizită" ], text "...." ]
        }


page51 =
    let
        content =
            div []
                [ h2 [ style "color" "var(--color-orange)" ] [ strongText "Lecția 3.", text " Planul dezvoltat de idei" ]
                , stackSmall
                    [ page51Box1
                    , page51Box2
                    , page51Box3
                    , page51Box4
                    ]
                ]
    in
    page
        { isOdd = False
        , unit = "Unitatea II"
        , details = "De-a ce mă joc"
        , activity = "Lectură"
        , no = 51
        , content = content
        }


main =
    page51
