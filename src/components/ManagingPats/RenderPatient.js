import React from 'react'

function RenderPatient(props){
    const content = props.posts.map((post) =>
        <div key={post.id}>
            <h3>{post.name}</h3>
            <p>{post.room}</p>
            <p>{post.supo}</p>
        </div>
    );
    return (
        <div>
        {content}
        </div>
    );
}

export default RenderPatient


// function Blog(props) {
//     const content = props.posts.map((post) =>
//       <div key={post.id}>
//         <h3>{post.title}</h3>
//         <p>{post.content}</p>
//       </div>
//     );
//     return (
//       <div>
//         {content}
//       </div>
//     );
//   }

// const posts = [
//     {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
//     {id: 2, title: 'Installation', content: 'You can install React from npm.'}
//   ];