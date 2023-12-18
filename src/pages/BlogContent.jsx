import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBlog } from '../api/blog'
import { scrollToTop } from '../ScollToTop';

export default function BlogContent() {
    const [blogContent, setBlogContent] = useState({});
    const params = useParams(); 
    const blogId = params.blogId;

    const dateObject = new Date(blogContent?.blog?.createdAt);

       const months = [
           "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];

        const formattedDateString = `${months[dateObject.getMonth()]} ${dateObject.getDate()}, ${dateObject.getFullYear()}`;

    useEffect(()=> {
        getBlog(blogId, setBlogContent);
        scrollToTop();
    },[])
    return (
        <>
            <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white antialiased blog-content">
                <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
                    <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                        <header className="mb-4 lg:mb-6 not-format">
                            <address className="flex items-center mb-6 not-italic">
                                <div className="inline-flex items-center mr-3 text-sm text-gray-900">
                                    <img className="mr-4 w-16 h-16 rounded-full" src="https://i.imgur.com/Qq1VF6Q.jpg" alt="Jese Leos" />
                                    <div>
                                        <a href="#" rel="author" className="text-xl font-bold text-gray-900">{blogContent?.blog?.owner_name}</a>
                                    
                                        <p className="text-base text-gray-500"><time pubdate dateTime="2022-02-08" title="February 8th, 2022">{formattedDateString}</time></p>
                                    </div>
                                </div>
                            </address>
                            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">{blogContent?.blog?.blog_title}</h1>
                        </header>
                        <figure className="mb-6">
                            <img src="https://i.imgur.com/R6ncc8X.jpg" alt='' />
                        </figure>

                        <p>
                    {blogContent?.blog?.content}  
                    </p>

                     </article>
                    </div>
                   
                    </main>
        </>
    );
}