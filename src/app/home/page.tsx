import React from 'react'
import './home.css'

const Home = () => {
    return (
        <section className="w-full flex flex-col ">
            <nav className='p-4 py-6 flex' >
                <h1 className='font-semibold text-xl' >Hello, Ankur</h1>
            </nav>

            <div className="artists h-fit flex gap-2 scroll-smooth w-full pl-4 overflow-x-auto">
                <div className="artist shrink-0 flex flex-col items-center w-fit h-fit">
                    <img className='rounded-full aspect-square h-20 w-20 object-cover' src="https://images.pexels.com/photos/96381/pexels-photo-96381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <p className='max-w-20 truncate' >artist name artist name</p>
                </div>
                <div className="artist shrink-0 flex flex-col items-center w-fit h-fit">
                    <img className='rounded-full aspect-square h-20 w-20 object-cover' src="https://images.pexels.com/photos/96381/pexels-photo-96381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <p className='max-w-20 truncate' >artist name artist name</p>
                </div>
                <div className="artist shrink-0 flex flex-col items-center w-fit h-fit">
                    <img className='rounded-full aspect-square h-20 w-20 object-cover' src="https://images.pexels.com/photos/96381/pexels-photo-96381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <p className='max-w-20 truncate' >artist name artist name</p>
                </div>
                <div className="artist shrink-0 flex flex-col items-center w-fit h-fit">
                    <img className='rounded-full aspect-square h-20 w-20 object-cover' src="https://images.pexels.com/photos/96381/pexels-photo-96381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <p className='max-w-20 truncate' >artist name artist name</p>
                </div>
                <div className="artist shrink-0 flex flex-col items-center w-fit h-fit">
                    <img className='rounded-full aspect-square h-20 w-20 object-cover' src="https://images.pexels.com/photos/96381/pexels-photo-96381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <p className='max-w-20 truncate' >artist name artist name</p>
                </div>
                <div className="artist shrink-0 flex flex-col items-center w-fit h-fit">
                    <img className='rounded-full aspect-square h-20 w-20 object-cover' src="https://images.pexels.com/photos/96381/pexels-photo-96381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <p className='max-w-20 truncate' >artist name artist name</p>
                </div>
            </div>

            <div className="audios p-4 flex flex-col gap-3">
                <div className="recent">
                    <div className="audio-card bg-bg-primary-default rounded-lg shadow-md flex gap-3 p-2">
                        <div className="audio-card-image overflow-hidden w-fit h-16 aspect-square bg-black rounded-lg">
                            <img className='h-full w-full aspect-square' src="https://images.pexels.com/photos/2517748/pexels-photo-2517748.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />
                        </div>
                        <div className="audio-card-info flex flex-col">
                            <h3 className='font-semibold text-md' >Title</h3>
                            <p className='font-light text-sm' >Artist</p>
                        </div>
                    </div>
                    <div className="audio-card bg-bg-primary-default rounded-lg shadow-md flex gap-3 p-2">
                        <div className="audio-card-image overflow-hidden w-fit h-16 aspect-square bg-black rounded-lg">
                            <img className='h-full w-full aspect-square' src="https://images.pexels.com/photos/2517748/pexels-photo-2517748.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />
                        </div>
                        <div className="audio-card-info flex flex-col">
                            <h3 className='font-semibold text-md' >Title</h3>
                            <p className='font-light text-sm' >Artist</p>
                        </div>
                    </div>
                    <div className="audio-card bg-bg-primary-default rounded-lg shadow-md flex gap-3 p-2">
                        <div className="audio-card-image overflow-hidden w-fit h-16 aspect-square bg-black rounded-lg">
                            <img className='h-full w-full aspect-square' src="https://images.pexels.com/photos/2517748/pexels-photo-2517748.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />
                        </div>
                        <div className="audio-card-info flex flex-col">
                            <h3 className='font-semibold text-md' >Title</h3>
                            <p className='font-light text-sm' >Artist</p>
                        </div>
                    </div>
                    <div className="audio-card bg-bg-primary-default rounded-lg shadow-md flex gap-3 p-2">
                        <div className="audio-card-image overflow-hidden w-fit h-16 aspect-square bg-black rounded-lg">
                            <img className='h-full w-full aspect-square' src="https://images.pexels.com/photos/2517748/pexels-photo-2517748.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />
                        </div>
                        <div className="audio-card-info flex flex-col">
                            <h3 className='font-semibold text-md' >Title</h3>
                            <p className='font-light text-sm' >Artist</p>
                        </div>
                    </div>
                    <div className="audio-card bg-bg-primary-default rounded-lg shadow-md flex gap-3 p-2">
                        <div className="audio-card-image overflow-hidden w-fit h-16 aspect-square bg-black rounded-lg">
                            <img className='h-full w-full aspect-square' src="https://images.pexels.com/photos/2517748/pexels-photo-2517748.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />
                        </div>
                        <div className="audio-card-info flex flex-col">
                            <h3 className='font-semibold text-md' >Title</h3>
                            <p className='font-light text-sm' >Artist</p>
                        </div>
                    </div>
                    <div className="audio-card bg-bg-primary-default rounded-lg shadow-md flex gap-3 p-2">
                        <div className="audio-card-image overflow-hidden w-fit h-16 aspect-square bg-black rounded-lg">
                            <img className='h-full w-full aspect-square' src="https://images.pexels.com/photos/2517748/pexels-photo-2517748.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />
                        </div>
                        <div className="audio-card-info flex flex-col">
                            <h3 className='font-semibold text-md' >Title</h3>
                            <p className='font-light text-sm' >Artist</p>
                        </div>
                    </div>

                </div>
            </div>

            <h1 className='px-4'>Explore</h1>

            <div className="audios-explore p-4">
                <div className="audio-card bg-bg-primary-default rounded-lg shadow-md flex w-fit flex-col gap-3 p-2">
                    <div className="audio-card-image overflow-hidden w-fit aspect-square bg-black rounded-lg">
                        <img className='h-full w-full aspect-square' src="https://images.pexels.com/photos/2517748/pexels-photo-2517748.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />
                    </div>
                    <div className="audio-card-info flex flex-col">
                        <h3 className='font-semibold text-md' >Title</h3>
                        <p className='font-light text-sm' >Artist</p>
                    </div>
                </div>
                <div className="audio-card bg-bg-primary-default rounded-lg shadow-md flex w-fit flex-col gap-3 p-2">
                    <div className="audio-card-image overflow-hidden w-fit aspect-square bg-black rounded-lg">
                        <img className='h-full w-full aspect-square' src="https://images.pexels.com/photos/2517748/pexels-photo-2517748.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />
                    </div>
                    <div className="audio-card-info flex flex-col">
                        <h3 className='font-semibold text-md' >Title</h3>
                        <p className='font-light text-sm' >Artist</p>
                    </div>
                </div>
                <div className="audio-card bg-bg-primary-default rounded-lg shadow-md flex w-fit flex-col gap-3 p-2">
                    <div className="audio-card-image overflow-hidden w-fit aspect-square bg-black rounded-lg">
                        <img className='h-full w-full aspect-square' src="https://images.pexels.com/photos/2517748/pexels-photo-2517748.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />
                    </div>
                    <div className="audio-card-info flex flex-col">
                        <h3 className='font-semibold text-md' >Title</h3>
                        <p className='font-light text-sm' >Artist</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Home