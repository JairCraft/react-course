import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    const format = (userName) => `@${userName}`
    
    return (
        <section className='App'>
            <TwitterFollowCard formatUserName={format} userName={'jair_fantasma'} name={'Jair Fantasma'} initialIsFollowing={true}/>
            <TwitterFollowCard formatUserName={format} userName={'jair_fantasma'} name={'Jair Fantasma'}/>
        </section>
    )
}