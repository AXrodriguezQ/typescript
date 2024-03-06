
interface userData {
    username: string
    created_at?: Date
    superuser: boolean
    readonly personal: {
        name: string
        age: number
    }
    logout(): void
    rename: (username: string) => void
}

function login(): userData {
    return {
        username: "juan",
        created_at: new Date(),
        superuser: true,
        personal: {
            name: "juan",
            age: 21
        },
        logout: () => { },
        rename: (username) => {
            username.toUpperCase()
         }
    }
}

let data = login();

data.created_at && data.created_at.getDay()
data.created_at?.getHours()
