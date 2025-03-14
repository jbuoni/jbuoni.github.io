import Reveal from 'react-awesome-reveal'

export interface ProfileProps {
    name: string
    title: string
    pic: any
    school: string
    company: string
    companyPic: any
    website: string
    schoolPic: any
    companyWebsite: string
    isWebsite?: boolean
}


export const navigateToSite = (site: string) => {
    const win = window.open(site, '_blank')
    win?.focus()
};

export const Philosophy = () => {
    return (
        <div className="mentee-description">
            <Reveal>
                <p>
                    The mentorship I have been able to be a part of has been the most rewarding and beneficial aspect of my software career. 
                    When I was in college, I found myself feeling less than when compared to some of my classmates. During an internship, I 
                    met my mentor Carol, who beleived im myself and my abilities, and in doing so allowed me to grow and build my own 
                    confidence. I can say that I would not be where I am today if I didn't have her mentor me. As a way to give back, I try 
                    to pass on what was done to me. In doing so, I have grown dramatically in my career, as well as outside of the software 
                    world. The mentees I continue to keep in contact with have given me way more than I can ever give to them. 
                    Though I am no expert, and I don't have the process down to a science I focus on some key ideas. 
                </p> 
            </Reveal>
            <Reveal>
                <p>
                    <b>Belief:</b> In my opinion, the most important factor in a good mentor is the ability to not only believe in your mentee but 
                    being able to express that belief in a way that is genuine. I try to make a point to demonstrate to my mentees that I 
                    want what is best for them, and not what will be best for me. Not only does this give them a safe individual to bring 
                    questions and concerns to, but it also helps me to get a better perspective of who they are as a person, and helps me to connet and 
                    empathise with them on a personal level. Letting them set goals, working with them to achieve those goals, and being a part of their 
                    development is one of the most rewarding experiences I have had.
                </p>
                <p>
                    <b>Effort:</b> Finding time to focus on working with them, or just for them to connect with me is also very important. Many of mine 
                    have moved on to bigger and better things, so it can be a struggle to keep in contact, but I try to schedule at least a few 
                    times where I can meet with them and focus on how they are doing. Though I do love seeing them, this is also very beneficial 
                    for me because I find that spending time focusing on someone who is not me helps me become a better person.
                </p>
            </Reveal>
            <Reveal>
                <p>
                    <b>Be Dynamic:</b> Though there are some things that I do for all the mentees I work with, I try to keep my "program" as 
                    fluid as possible, finding what best works for each one of them, and adapting my approach to best help them to reach their 
                    potential. We are all imperfect people, and there will be things about how they approach problems that I do not agree with, 
                    but I think it is important to try to work on improving their skillsets, and not trying to change them.
                </p>
                <p>
                    <b>Build Confidence:</b> I believe in life it is important to let people know when they are doing a good job. Everyone wants 
                    to feel good about what they do, and everyone wants to feel confident and secure. One of the more prevalent "defects" I 
                    notice is a lack of confidence when I start working with mentees. Because of this, I have made an effort to try to build 
                    their confidence early, and let them know what they are doing well. I find that once confidence is built, they 
                    will be more inclined to think for themselves and to explore their own approach to every problem.  
                </p>
            </Reveal>
            <Reveal>
                <p>
                    So now that you have gotten this far, why don't I show you some of the amazing people I have had the opportunity to mentor? 
                    Let's be honest here, you are probably looking at this page because you are a friend of mine, or considering hiring me. 
                    Maybe you like me, maybe you don't but either way, if you are looking for some amazing software developers, and even better 
                    people, why not connect with them?
                </p>
            </Reveal>
        </div>
    )
}