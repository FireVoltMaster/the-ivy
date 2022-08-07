import days from "./August22Days";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function AugustCalendar() {
    return (
      <div className="lg:flex lg:h-full lg:flex-col pl-10">
        <header className="relative z-20 flex items-center justify-between border-b border-gray-200 py-4 px-6 lg:flex-none">
          {/* <h1 className="text-lg font-semibold text-gray-300">
            <time dateTime="2022-01">August</time>
          </h1> */}
        </header>
  
        <div className="shadow ring-1 ring-black ring-opacity-5 lg:flex lg:flex-auto lg:flex-col">
  
              {/* DAYS OF THE WEEK */}
          <div className="grid grid-cols-7 gap-px border-b border-gray-300 bg-gray-200 text-center text-xs font-semibold leading-6 text-gray-700 lg:flex-none">
            <div className="bg-white py-2">
              Sun<span className="invisible lg:visible">day</span>
            </div>
            <div className="bg-white py-2">
              Mon<span className="invisible lg:visible">day</span>
            </div>
            <div className="bg-white py-2">
              Tues<span className="invisible lg:visible">day</span>
            </div>
            <div className="bg-white py-2">
              Wed<span className="invisible lg:visible">nesday</span>
            </div>
            <div className="bg-white py-2">
              Thu<span className="invisible lg:visible">rsday</span>
            </div>
            <div className="bg-white py-2">
              Fri<span className="invisible lg:visible">day</span>
            </div>
            <div className="bg-white py-2">
              Sat<span className="invisible lg:visible">urday</span>
            </div>
          </div>
  
          <div className="flex bg-gray-200 text-xs leading-6 text-gray-700 lg:flex-auto">
  
              {/* LARGE SCREEN VIEW */}
            <div className="hidden w-full lg:grid lg:grid-cols-7 lg:grid-rows-6 lg:gap-px">
              {days.map((day) => (
                <div
                  key={day.date}
                  className={classNames(
                    day.isCurrentMonth ? 'bg-white' : 'bg-gray-100 text-gray-500',
                    'relative py-2 px-3'
                  )}
                >
                  <time
                    dateTime={day.date}
                    className={
                      day.isToday
                        ? 'flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white'
                        : undefined
                    }
                  >
                    {day.date.split('-').pop().replace(/^0/, '')}
                  </time>
                  {day.events.length > 0 && (
                    <ol className="mt-2">
                      {day.events.slice(0, 2).map((event) => (
                        <li key={event.id}>
                          <a href={event.href} className="group flex">
                            <p className="flex-auto truncate font-medium text-gray-900 group-hover:text-neon-pink hover:scale-125">
                              {event.name}
                            </p>
                            <time
                              dateTime={event.datetime}
                              className="ml-3 hidden flex-none text-gray-500 group-hover:text-neon-pink xl:block"
                            >
                              {event.time}
                            </time>
                          </a>
                        </li>
                      ))}
                      {day.events.length > 2 && <li className="text-gray-500">+ {day.events.length - 2} more</li>}
                    </ol>
                  )}
                </div>
              ))}
            </div>
  
                  {/* MOBILE VIEW */}
              <div className="isolate grid w-full grid-cols-7 grid-rows-6 gap-px lg:hidden">
                  {days.map((day) => (
                  <div
                      key={day.date}
                      className={classNames(
                      day.isCurrentMonth ? 'bg-white' : 'bg-gray-100 text-gray-500',
                      'relative py-2 px-3'
                      )}
                  >
                      <time
                      dateTime={day.date}
                      className={
                          day.isToday
                          ? 'flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white'
                          : undefined
                      }
                      >
                      {day.date.split('-').pop().replace(/^0/, '')}
                      </time>
                      {day.events.length > 0 && (
                      <ol className="mt-2">
                          {day.events.slice(0, 2).map((event) => (
                          <li key={event.id}>
                              <a href={event.href} className="group flex">
                              <p className="flex-auto truncate font-medium text-gray-900 group-hover:text-neon-pink">
                                  {/* {event.name} */}
                                  <svg className="w-3 h-3 pb-1" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                      <path d="M288 256C288 273.7 273.7 288 256 288C238.3 288 224 273.7 224 256C224 238.3 238.3 224 256 224C273.7 224 288 238.3 288 256zM112 256C112 176.5 176.5 112 256 112C335.5 112 400 176.5 400 256C400 335.5 335.5 400 256 400C176.5 400 112 335.5 112 256zM256 336C300.2 336 336 300.2 336 256C336 211.8 300.2 176 256 176C211.8 176 176 211.8 176 256C176 300.2 211.8 336 256 336zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 64C149.1 64 64 149.1 64 256C64 362 149.1 448 256 448C362 448 448 362 448 256C448 149.1 362 64 256 64z"/>
                                  </svg>
                              </p>
                              <time
                                  dateTime={event.datetime}
                                  className="ml-3 hidden flex-none text-gray-500 group-hover:text-neon-pink xl:block"
                              >
                                  {event.time}
                              </time>
                              </a>
                          </li>
                          ))}
                          {day.events.length > 2 && <li className="text-gray-500">+ {day.events.length - 2} more</li>}
                      </ol>
                      )}
                  </div>
                  ))}
              </div>
          </div>
        </div>
      </div>
    )
  }
  