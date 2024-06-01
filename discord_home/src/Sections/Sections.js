import '../styles/section/Sections.css'

const Sections = () => {
    return (
        <div className="sections">
        {/* Section 1 */}
        <div className="section">
            <div className="text">
                <h1>MAKE YOUR GROUP CHATS MORE FUN</h1>
                <p>Use custom emoji, stickers, soundboard effects and more to add your personality to your voice, video, or text chat. Set your avatar and a custom status, and write your own profile to show up in chat your way.</p>
            </div>
            <div className="video">
                
            <video
                id="a02aafd0-5263-8c7a-e8e6-eddeb8d5f018-video"
                autoPlay
                loop
                src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/663b271d6f05c8c9e11f8d65_Discord Refresh Sound-MP4-transcode.mp4"
                >
                
            </video>

            </div>
        </div>
            {/* Section 2 */}
            <div className="section">
                <div className="text">
                    <h1>STREAM LIKE YOU’RE IN THE SAME ROOM</h1>
                    <p>High quality and low latency streaming makes it 
                        feel like you're hanging out on the couch with friends while playing a game, watching shows, looking at photos, or idk doing homework or something.
                    </p>
                </div>
                <div className="video">
                    <video autoPlay loop src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2%2F665434315cbc60da2d4c9684_Discord_Website_Refresh_Same%20Room_EN_V2-transcode.mp4">
                        
                    </video>
                </div>
            </div>
            {/* Section 3 */}
            <div className="section">
                <div className="text">
                    <h1>HOP IN WHEN YOU'RE FREE, NO NEED TO CALL</h1>
                    <p>Easily hop in and out of voice or text chats without having to call or invite anyone, so your party chat lasts before, during, and after your game session.</p>
                </div>
                <div className="video">
                    <video autoPlay loop src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6638c6b04eff56a99c1e2d7d_Discord_Website_Refresh_Hop-In-transcode.mp4">
                        
                    </video>
                </div>
            </div>
            {/* Section 4 */}
            <div className="section">
                <div className="text">
                    <h1>SEE WHO'S AROUND TO CHILL</h1>
                    <p>See who's around, playing games, or just hanging out. For supported games, you can see what modes or characters your friends are playing and directly join up.
</p>
                </div>
                <div className="video">
                    <video autoPlay loop src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6638c7e8907412911166f683_Discord_Website_Refresh_See%20Who_s%20Around-transcode.mp4">
                        
                    </video>
                </div>
            </div>
            {/* Section 5 */}
            <div className="section">
                <div className="text">
                    <h1>ALWAYS HAVE SOMETHING TO DO TOGETHER</h1>
                    <p>Watch videos, play built-in games, listen to music, or just scroll together and spam memes. Seamlessly text, call, video chat, and play games, all in one group chat.</p>
                </div>
                <div className="video">
                    <video autoPlay loop data-object-fit='cover' muted src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/66446078b3e738a7c1f85e35_Discord_Website_Refresh_Activities_03-transcode.mp4" >
                        Your browser does not support the video tag
                    </video>
                </div>
            </div>
            {/* Section 6 */}
            <div className="section">
                <div className="text">
                    <h1>WHEREVER YOU GAME, HANG OUT HERE</h1>
                    <p>On your PC, phone, or console, you can still hang out on Discord. Easily switch between devices and use tools to manage multiple group chats with friends.</p>
                </div>
                <div className="video">
                <video autoPlay loop muted playsinline data-object-fit="cover" src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6638c8e7cb756886cd8d61af_Discord_Website_Refresh_Platforms-transcode.mp4" data-wf-ignore="true">
  Your browser does not support the video tag.
</video>

                </div>
            </div>
        </div>
    );
}

export default Sections;