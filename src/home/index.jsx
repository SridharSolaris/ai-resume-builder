import Header from '@/components/custom/Header';
import { UserButton } from '@clerk/clerk-react';
import { AtomIcon, Edit, FileDiffIcon, Share2 } from 'lucide-react';
import React from 'react';

const CTAButton = ({ href, children, variant = 'primary' }) => {
    const baseClasses = 'inline-flex items-center px-6 py-3 rounded-lg font-medium transition';
    const variants = {
        primary: 'bg-primary text-white hover:bg-primary-dark',
        secondary: 'text-gray-900 border border-gray-300 hover:bg-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700',
    };

    return (
        <a href={href} className={`${baseClasses} ${variants[variant]}`}>
            {children}
        </a>
    );
};

const StepCard = ({ icon: Icon, title, description }) => (
    <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-lg hover:shadow-xl transition">
        <Icon className="w-8 h-8 mx-auto text-primary" aria-hidden="true" />
        <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
    </div>
);

function Home() {
    return (
        <div>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative z-50 text-center py-16 px-4 bg-gray-50">
                    <div className="container mx-auto max-w-screen-xl">
                        <a
                            href="#"
                            className="inline-flex items-center mb-7 py-2 px-5 bg-gray-100 rounded-full hover:bg-gray-200 transition text-sm font-medium"
                        >
                            <span className="bg-primary text-white px-3 py-1 rounded-full text-xs">Let's Connect</span>
                            <span className="ml-3">Visit My Portfolio</span>
                            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
                            </svg>
                        </a>

                        <h1 className="text-4xl font-extrabold md:text-5xl lg:text-6xl text-gray-900 dark:text-white leading-tight">
                            Build Your Resume <span className="text-primary">With AI</span>
                        </h1>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                            Effortlessly craft a standout resume with our AI-powered builder.
                        </p>

                        <div className="mt-8 flex justify-center gap-4 flex-col sm:flex-row">
                            <CTAButton href="/auth/sign-in">
                                Get Started
                                <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                    <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
                                </svg>
                            </CTAButton>
                            <CTAButton href="/dashboard" variant="secondary">
                                <FileDiffIcon className="w-5 h-5 mr-2" />
                                Build Resume
                            </CTAButton>
                        </div>
                    </div>
                </section>

                {/* How it Works Section */}
                <section className="bg-white py-16 px-4 text-center">
                    <div className="container mx-auto max-w-screen-xl">
                        <h2 className="text-3xl font-bold">How it Works?</h2>
                        <p className="text-gray-600 mt-2">Build your resume in just 3 simple steps</p>

                        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                            <StepCard
                                icon={AtomIcon}
                                title="Fill your details"
                                description="Input your personal and professional details to get started."
                            />
                            <StepCard
                                icon={Edit}
                                title="Edit your resume"
                                description="Make changes and edits to tailor your resume as you like."
                            />
                            <StepCard
                                icon={Share2}
                                title="Download & Share"
                                description="Download your finished resume and share it instantly."
                            />
                        </div>

                        <div className="mt-12">
                            <CTAButton href="/auth/sign-in" className="bg-pink-600 hover:bg-pink-700">
                                Get Started Today
                            </CTAButton>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Home;
