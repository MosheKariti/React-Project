import "../../Styles/Style.css"


export function LoggedInUser({loggedInUser}) {

    return (
        <>
            {loggedInUser &&
            <div className={'logged-in-user'}>
                    {'User: ' + loggedInUser.name.first}
            </div>
            }
        </>
    )
}
