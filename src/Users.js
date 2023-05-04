import "./App.css";

    const user = {
        name: "Marius",
        imageUrl: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        imageHeight: 300,
        imageWidth: "auto"
    };

    export default function Users() {
        return(
            <>
                <h1 className="userText">{user.name}</h1>
                <img
                    className="avatar"
                    src={user.imageUrl}
                    alt={`${user.name}`}
                    style={{
                    width: user.imageHeight,
                    height: user.imageWidth
                    }}
                />
            </>
        );
    } 
