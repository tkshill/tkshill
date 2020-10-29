module WhoAmI exposing(kirk)

type alias Name = String
type alias Language = String
type alias MiscellaneousTech = String
type alias WorkStatus = String
type alias Hobby = String

type alias Developer =
    { name : Name
    , languages : List Language
    , tech : List MiscellaneousTech
    , status : WorkStatus
    , hobbies : List Hobby
    }

kirk =
    { name = "Tyrone Kirk Shillingford"
    , languages = [ "Elm", "Fsharp", "Python", "SQL", "Csharp" ]
    , tech = [ "SqlServer", "SMSS", "VisualStudioCode" ]
    , status = "AvailableForRemoteWork"
    , hobbies = [ "OpenSourceSoftware", "CommunityManagement", "GameDev", "Sudoku" ]
    }