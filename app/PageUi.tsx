import "@/app/style/site.css";
import "@/app/style/sitetwo.css";

export default function PageUi({ id }: { id: string }) {
  return (
    <div>
      <div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "/* ! tailwindcss v3.3.3 | MIT License | https://tailwindcss.com */*,::after,::before{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}::after,::before{--tw-content:''}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";font-feature-settings:normal;font-variation-settings:normal}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*, ::before, ::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.top-0{top:0px}.top-\\[10px\\]{top:10px}.right-1{right:0.25rem}.-left-3{left:-0.75rem}.left-0{left:0px}.top-10{top:2.5rem}.z-20{z-index:20}.z-10{z-index:10}.order-last{order:9999}.float-right{float:right}.float-left{float:left}.m-2{margin:0.5rem}.mx-auto{margin-left:auto;margin-right:auto}.mx-4{margin-left:1rem;margin-right:1rem}.my-2{margin-top:0.5rem;margin-bottom:0.5rem}.my-4{margin-top:1rem;margin-bottom:1rem}.ml-auto{margin-left:auto}.mt-1{margin-top:0.25rem}.mb-4{margin-bottom:1rem}.mb-6{margin-bottom:1.5rem}.mt-3{margin-top:0.75rem}.mt-4{margin-top:1rem}.mt-8{margin-top:2rem}.ml-10{margin-left:2.5rem}.block{display:block}.inline-block{display:inline-block}.flex{display:flex}.grid{display:grid}.hidden{display:none}.h-10{height:2.5rem}.h-6{height:1.5rem}.h-0{height:0px}.h-0\\.5{height:0.125rem}.h-8{height:2rem}.h-screen{height:100vh}.min-h-screen{min-height:100vh}.w-full{width:100%}.w-max{width:max-content}.w-1\\/4{width:25%}.w-8{width:2rem}.w-screen{width:100vw}.min-w-fit{min-width:-moz-fit-content;min-width:fit-content}.min-w-full{min-width:100%}.max-w-7xl{max-width:80rem}.max-w-\\[100\\%\\]{max-width:100%}.max-w-5xl{max-width:64rem}.max-w-md{max-width:28rem}.max-w-xl{max-width:36rem}.grow{flex-grow:1}.cursor-pointer{cursor:pointer}.grid-cols-2{grid-template-columns:repeat(2, minmax(0, 1fr))}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.gap-x-4{column-gap:1rem}.gap-x-2{column-gap:0.5rem}.gap-y-2{row-gap:0.5rem}.gap-y-4{row-gap:1rem}.self-center{align-self:center}.overflow-hidden{overflow:hidden}.overflow-y-scroll{overflow-y:scroll}.rounded{border-radius:0.25rem}.rounded-md{border-radius:0.375rem}.rounded-xl{border-radius:0.75rem}.border-2{border-width:2px}.border-t{border-top-width:1px}.border-none{border-style:none}.border-b-white{--tw-border-opacity:1;border-bottom-color:rgb(255 255 255 / var(--tw-border-opacity))}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.bg-gradient-to-t{background-image:linear-gradient(to top, var(--tw-gradient-stops))}.from-white{--tw-gradient-from:#fff var(--tw-gradient-from-position);--tw-gradient-to:rgb(255 255 255 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.p-2{padding:0.5rem}.p-4{padding:1rem}.px-4{padding-left:1rem;padding-right:1rem}.py-2{padding-top:0.5rem;padding-bottom:0.5rem}.py-1{padding-top:0.25rem;padding-bottom:0.25rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.px-16{padding-left:4rem;padding-right:4rem}.px-3{padding-left:0.75rem;padding-right:0.75rem}.px-8{padding-left:2rem;padding-right:2rem}.py-3{padding-top:0.75rem;padding-bottom:0.75rem}.py-3\\.5{padding-top:0.875rem;padding-bottom:0.875rem}.py-4{padding-top:1rem;padding-bottom:1rem}.py-8{padding-top:2rem;padding-bottom:2rem}.px-2{padding-left:0.5rem;padding-right:0.5rem}.pl-1{padding-left:0.25rem}.pl-3{padding-left:0.75rem}.pt-14{padding-top:3.5rem}.text-left{text-align:left}.text-center{text-align:center}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:0.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.font-bold{font-weight:700}.uppercase{text-transform:uppercase}.not-italic{font-style:normal}.text-white{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.text-black{--tw-text-opacity:1;color:rgb(0 0 0 / var(--tw-text-opacity))}.opacity-100{opacity:1}.transition{transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.ease-in-out{transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.before\\:absolute::before{content:var(--tw-content);position:absolute}.before\\:bottom-0::before{content:var(--tw-content);bottom:0px}.before\\:left-2\\/3::before{content:var(--tw-content);left:66.666667%}.before\\:right-0::before{content:var(--tw-content);right:0px}.before\\:top-0::before{content:var(--tw-content);top:0px}.before\\:z-0::before{content:var(--tw-content);z-index:0}.before\\:h-full::before{content:var(--tw-content);height:100%}.before\\:content-\\[\\'\\\\f099\\'\\]::before{--tw-content:'\\f099';content:var(--tw-content)}.before\\:content-\\[\\'\\\\f09a\\'\\]::before{--tw-content:'\\f09a';content:var(--tw-content)}.before\\:content-\\[\\'\\\\f0e1\\'\\]::before{--tw-content:'\\f0e1';content:var(--tw-content)}.before\\:content-\\[\\'\\\\f16a\\'\\]::before{--tw-content:'\\f16a';content:var(--tw-content)}.after\\:content-\\[\\'\\\\f078\\'\\]::after{--tw-content:'\\f078';content:var(--tw-content)}.hover\\:rounded-md:hover{border-radius:0.375rem}.hover\\:underline:hover{-webkit-text-decoration-line:underline;text-decoration-line:underline}.hover\\:no-underline:hover{-webkit-text-decoration-line:none;text-decoration-line:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:font-bold:disabled{font-weight:700}.disabled\\:text-white:disabled{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.disabled\\:opacity-60:disabled{opacity:0.6}.disabled\\:hover\\:cursor-not-allowed:hover:disabled{cursor:not-allowed}@media not all and (min-width: 640px){.max-sm\\:text-sm{font-size:0.875rem;line-height:1.25rem}}@media (min-width: 768px){.md\\:-right-10{right:-2.5rem}.md\\:mx-auto{margin-left:auto;margin-right:auto}.md\\:block{display:block}.md\\:hidden{display:none}.md\\:min-w-full{min-width:100%}.md\\:gap-x-8{column-gap:2rem}.md\\:p-4{padding:1rem}.md\\:text-center{text-align:center}.md\\:text-3xl{font-size:1.875rem;line-height:2.25rem}.md\\:text-base{font-size:1rem;line-height:1.5rem}.md\\:text-lg{font-size:1.125rem;line-height:1.75rem}}@media (min-width: 1024px){.lg\\:relative{position:relative}.lg\\:block{display:block}.lg\\:flex{display:flex}.lg\\:hidden{display:none}.lg\\:w-full{width:100%}.lg\\:px-16{padding-left:4rem;padding-right:4rem}}",
          }}
        />
        <div id="__next">
          <div id="mobileMenu" className="hidden">
            <div className="min-h-screen mobile-menu">
              <div className="sticky top-0 z-20 w-full bg-tempcover-blue-800 px-4 py-2">
                <div className="mx-auto flex max-w-7xl items-center lg:px-16">
                  <div className="flex w-full justify-end lg:hidden">
                    <button id="MobileMenuButton" className="z-10">
                      <span id="MobileToggle" className="text-xl text-white">
                        X
                      </span>
                    </button>
                    <div className="fixed top-0 left-0 h-screen w-screen overflow-y-scroll bg-tempcover-blue-800 p-4 pt-14 text-center lg:hidden">
                      <div className="mb-4 flex flex-col gap-y-4 text-left font-brandon text-xl font-bold">
                        <div className="flex flex-col gap-y-4 text-left text-xl font-bold">
                          <a
                            id="menuLink4454"
                            href="https://www.tempcover.com/"
                            className="hover:underline text-white hover:no-underline font-lato text-xl"
                          >
                            Home
                          </a>
                        </div>
                        <div className="flex flex-col gap-y-4 text-left text-xl font-bold">
                          <span className="flex">
                            <a
                              id="menuLink10910"
                              href="https://www.tempcover.com/temporary-car-insurance"
                              className="hover:underline text-white hover:no-underline font-lato text-xl"
                            >
                              Car
                            </a>
                            <span
                              className="toggle-btn px-2 font-icomoon text-white after:content-['\f078'] open-child"
                              data-id={10910}
                            />
                          </span>
                          <div
                            className="flex flex-col gap-y-4 text-lg child-menu hidden"
                            data-parentid={10910}
                          >
                            <span>
                              <a
                                id="menuLink8964"
                                href="https://www.tempcover.com/temporary-car-insurance"
                                className="hover:underline text-white hover:no-underline font-lato text-lg"
                              >
                                Temporary car insurance
                              </a>
                              <span
                                className="toggle-btn px-2 font-icomoon text-white after:content-['\f078'] open-grandchild"
                                data-id={8964}
                              />
                            </span>
                            <div
                              className="flex text-base py-1 flex-col gap-y-4 text-left text-md text-white hidden grandchild-menu"
                              data-parentid={8964}
                            >
                              <a
                                id="menuLinkview-temporary-car-insurance"
                                href="https://www.tempcover.com/temporary-car-insurance"
                                className="hover:underline font-lato"
                              >
                                View Temporary car insurance
                              </a>
                            </div>
                            <div
                              className="flex text-base py-1 flex-col gap-y-4 text-left text-md text-white hidden grandchild-menu"
                              data-parentid={8964}
                            >
                              <a
                                id="menuLink8974"
                                href="https://www.tempcover.com/temporary-car-insurance/hourly"
                                className="hover:underline font-lato"
                              >
                                Hourly car insurance
                              </a>
                            </div>
                            <div
                              className="flex text-base py-1 flex-col gap-y-4 text-left text-md text-white hidden grandchild-menu"
                              data-parentid={8964}
                            >
                              <a
                                id="menuLinkone-day-car-insurance"
                                href="https://www.tempcover.com/temporary-car-insurance/one-day"
                                className="hover:underline font-lato"
                              >
                                One day car insurance
                              </a>
                            </div>
                            <div
                              className="flex text-base py-1 flex-col gap-y-4 text-left text-md text-white hidden grandchild-menu"
                              data-parentid={8964}
                            >
                              <a
                                id="menuLink8968"
                                href="https://www.tempcover.com/temporary-car-insurance/weekly"
                                className="hover:underline font-lato"
                              >
                                Weekly car insurance
                              </a>
                            </div>
                            <div
                              className="flex text-base py-1 flex-col gap-y-4 text-left text-md text-white hidden grandchild-menu"
                              data-parentid={8964}
                            >
                              <a
                                id="menuLink8967"
                                href="https://www.tempcover.com/temporary-car-insurance/one-month"
                                className="hover:underline font-lato"
                              >
                                Monthly car insurance
                              </a>
                            </div>
                            <div
                              className="flex text-base py-1 flex-col gap-y-4 text-left text-md text-white hidden grandchild-menu"
                              data-parentid={8964}
                            >
                              <a
                                id="menuLinkweekend-car-insurance-2"
                                href="https://www.tempcover.com/temporary-car-insurance/weekend"
                                className="hover:underline font-lato"
                              >
                                Weekend car insurance
                              </a>
                            </div>
                            <div
                              className="flex text-base py-1 flex-col gap-y-4 text-left text-md text-white hidden grandchild-menu"
                              data-parentid={8964}
                            >
                              <a
                                id="menuLink8969"
                                href="https://www.tempcover.com/temporary-car-insurance/two-day"
                                className="hover:underline font-lato"
                              >
                                Two day car insurance
                              </a>
                            </div>
                          </div>
                          <div
                            className="flex flex-col gap-y-4 text-lg child-menu hidden"
                            data-parentid={10910}
                          >
                            <span>
                              <a
                                id="menuLink10697"
                                href="https://www.tempcover.com/temporary-car-insurance/young-drivers"
                                className="hover:underline text-white hover:no-underline font-lato text-lg"
                              >
                                New drivers
                              </a>
                            </span>
                          </div>
                          <div
                            className="flex flex-col gap-y-4 text-lg child-menu hidden"
                            data-parentid={10910}
                          >
                            <span>
                              <a
                                id="menuLink8992"
                                href="https://www.tempcover.com/temporary-car-insurance/students"
                                className="hover:underline text-white hover:no-underline font-lato text-lg"
                              >
                                Student drivers
                              </a>
                            </span>
                          </div>
                          <div
                            className="flex flex-col gap-y-4 text-lg child-menu hidden"
                            data-parentid={10910}
                          >
                            <span>
                              <a
                                id="menuLink8987"
                                href="https://www.tempcover.com/learner-driver-insurance"
                                className="hover:underline text-white hover:no-underline font-lato text-lg"
                              >
                                Temporary learner driver insurance
                              </a>
                            </span>
                          </div>
                          <div
                            className="flex flex-col gap-y-4 text-lg child-menu hidden"
                            data-parentid={10910}
                          >
                            <span>
                              <a
                                id="menuLink8988"
                                href="https://www.tempcover.com/temporary-car-insurance/impounded-vehicle"
                                className="hover:underline text-white hover:no-underline font-lato text-lg"
                              >
                                Impounded car insurance
                              </a>
                            </span>
                          </div>
                          <div
                            className="flex flex-col gap-y-4 text-lg child-menu hidden"
                            data-parentid={10910}
                          >
                            <span>
                              <a
                                id="menuLink8989"
                                href="https://www.tempcover.com/guides"
                                className="hover:underline text-white hover:no-underline font-lato text-lg"
                              >
                                Product guides
                              </a>
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-y-4 text-left text-xl font-bold">
                          <span className="flex">
                            <a
                              id="menuLink8971"
                              href="https://www.tempcover.com/temporary-van-insurance"
                              className="hover:underline text-white hover:no-underline font-lato text-xl"
                            >
                              Van
                            </a>
                            <span
                              className="toggle-btn px-2 font-icomoon text-white after:content-['\f078'] open-child"
                              data-id={8971}
                            />
                          </span>
                          <div
                            className="flex flex-col gap-y-4 text-lg child-menu hidden"
                            data-parentid={8971}
                          >
                            <span>
                              <a
                                id="menuLink10568"
                                href="https://www.tempcover.com/temporary-van-insurance"
                                className="hover:underline text-white hover:no-underline font-lato text-lg"
                              >
                                Temporary van insurance
                              </a>
                            </span>
                          </div>
                          <div
                            className="flex flex-col gap-y-4 text-lg child-menu hidden"
                            data-parentid={8971}
                          >
                            <span>
                              <a
                                id="menuLink8973"
                                href="https://www.tempcover.com/temporary-van-insurance/hourly-van-insurance"
                                className="hover:underline text-white hover:no-underline font-lato text-lg"
                              >
                                Hourly van insurance
                              </a>
                            </span>
                          </div>
                          <div
                            className="flex flex-col gap-y-4 text-lg child-menu hidden"
                            data-parentid={8971}
                          >
                            <span>
                              <a
                                id="menuLink10695"
                                href="https://www.tempcover.com/temporary-van-insurance/one-day"
                                className="hover:underline text-white hover:no-underline font-lato text-lg"
                              >
                                Daily van insurance
                              </a>
                            </span>
                          </div>
                          <div
                            className="flex flex-col gap-y-4 text-lg child-menu hidden"
                            data-parentid={8971}
                          >
                            <span>
                              <a
                                id="menuLink8975"
                                href="https://www.tempcover.com/temporary-van-insurance/weekly"
                                className="hover:underline text-white hover:no-underline font-lato text-lg"
                              >
                                Weekly van insurance
                              </a>
                            </span>
                          </div>
                          <div
                            className="flex flex-col gap-y-4 text-lg child-menu hidden"
                            data-parentid={8971}
                          >
                            <span>
                              <a
                                id="menuLink10706"
                                href="https://www.tempcover.com/temporary-van-insurance/impounded-van-insurance"
                                className="hover:underline text-white hover:no-underline font-lato text-lg"
                              >
                                Impound van Insurance
                              </a>
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-y-4 text-left text-xl font-bold">
                          <span className="flex">
                            <a
                              id="menuLink10090"
                              href="https://www.tempcover.com/temporary-courier-insurance"
                              className="hover:underline text-white hover:no-underline font-lato text-xl"
                            >
                              Courier
                            </a>
                            <span
                              className="toggle-btn px-2 font-icomoon text-white after:content-['\f078'] open-child"
                              data-id={10090}
                            />
                          </span>
                          <div
                            className="flex flex-col gap-y-4 text-lg child-menu hidden"
                            data-parentid={10090}
                          >
                            <span>
                              <a
                                id="menuLink10569"
                                href="https://www.tempcover.com/temporary-courier-insurance"
                                className="hover:underline text-white hover:no-underline font-lato text-lg"
                              >
                                Temporary courier insurance
                              </a>
                            </span>
                          </div>
                          <div
                            className="flex flex-col gap-y-4 text-lg child-menu hidden"
                            data-parentid={10090}
                          >
                            <span>
                              <a
                                id="menuLink10091"
                                href="https://www.tempcover.com/temporary-courier-insurance/light-haulage-courier-insurance"
                                className="hover:underline text-white hover:no-underline font-lato text-lg"
                              >
                                Temporary light haulage insurance
                              </a>
                            </span>
                          </div>
                          <div
                            className="flex flex-col gap-y-4 text-lg child-menu hidden"
                            data-parentid={10090}
                          >
                            <span>
                              <a
                                id="menuLink10092"
                                href="https://www.tempcover.com/temporary-courier-insurance/delivery-service-insurance"
                                className="hover:underline text-white hover:no-underline font-lato text-lg"
                              >
                                Temporary delivery driver insurance
                              </a>
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-y-4 text-left text-xl font-bold">
                          <span className="flex">
                            <a
                              id="menuLink8977"
                              href="https://www.tempcover.com/temporary-motorbike-insurance"
                              className="hover:underline text-white hover:no-underline font-lato text-xl"
                            >
                              Motorbike
                            </a>
                            <span
                              className="toggle-btn px-2 font-icomoon text-white after:content-['\f078'] open-child"
                              data-id={8977}
                            />
                          </span>
                          <div
                            className="flex flex-col gap-y-4 text-lg child-menu hidden"
                            data-parentid={8977}
                          >
                            <span>
                              <a
                                id="menuLink10570"
                                href="https://www.tempcover.com/temporary-motorbike-insurance"
                                className="hover:underline text-white hover:no-underline font-lato text-lg"
                              >
                                Temporary motorbike insurance
                              </a>
                            </span>
                          </div>
                          <div
                            className="flex flex-col gap-y-4 text-lg child-menu hidden"
                            data-parentid={8977}
                          >
                            <span>
                              <a
                                id="menuLink8978"
                                href="https://www.tempcover.com/temporary-motorbike-insurance/one-week"
                                className="hover:underline text-white hover:no-underline font-lato text-lg"
                              >
                                Weekly motorbike insurance
                              </a>
                            </span>
                          </div>
                          <div
                            className="flex flex-col gap-y-4 text-lg child-menu hidden"
                            data-parentid={8977}
                          >
                            <span>
                              <a
                                id="menuLink8980"
                                href="https://www.tempcover.com/temporary-motorbike-insurance/learner-motorbike-insurance"
                                className="hover:underline text-white hover:no-underline font-lato text-lg"
                              >
                                Learner motorbike insurance
                              </a>
                            </span>
                          </div>
                          <div
                            className="flex flex-col gap-y-4 text-lg child-menu hidden"
                            data-parentid={8977}
                          >
                            <span>
                              <a
                                id="menuLink9303"
                                href="https://www.tempcover.com/temporary-motorbike-insurance/young-drivers"
                                className="hover:underline text-white hover:no-underline font-lato text-lg"
                              >
                                Young riders motorbike insurance
                              </a>
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-y-4 text-left text-xl font-bold">
                          <span className="flex">
                            <a
                              id="menuLink8982"
                              href="https://tempcoverofficial.com/alpha33/data/#"
                              className="hover:underline text-white hover:no-underline font-lato text-xl"
                            >
                              Other Vehicles
                            </a>
                            <span
                              className="toggle-btn px-2 font-icomoon text-white after:content-['\f078'] open-child"
                              data-id={8982}
                            />
                          </span>
                          <div
                            className="flex flex-col gap-y-4 text-lg child-menu hidden"
                            data-parentid={8982}
                          >
                            <span>
                              <a
                                id="menuLink8983"
                                href="https://www.tempcover.com/motorhome"
                                className="hover:underline text-white hover:no-underline font-lato text-lg"
                              >
                                Temporary motorhome insurance
                              </a>
                            </span>
                          </div>
                          <div
                            className="flex flex-col gap-y-4 text-lg child-menu hidden"
                            data-parentid={8982}
                          >
                            <span>
                              <a
                                id="menuLink8984"
                                href="https://www.tempcover.com/temporary-van-insurance/tipper-truck"
                                className="hover:underline text-white hover:no-underline font-lato text-lg"
                              >
                                Tipper truck insurance
                              </a>
                            </span>
                          </div>
                          <div
                            className="flex flex-col gap-y-4 text-lg child-menu hidden"
                            data-parentid={8982}
                          >
                            <span>
                              <a
                                id="menuLink8985"
                                href="https://www.tempcover.com/temporary-van-insurance/pick-van-insurance"
                                className="hover:underline text-white hover:no-underline font-lato text-lg"
                              >
                                Pick up truck insurance
                              </a>
                            </span>
                          </div>
                          <div
                            className="flex flex-col gap-y-4 text-lg child-menu hidden"
                            data-parentid={8982}
                          >
                            <span>
                              <a
                                id="menuLink8986"
                                href="https://www.tempcover.com/temporary-van-insurance/flatbed"
                                className="hover:underline text-white hover:no-underline font-lato text-lg"
                              >
                                Temporary flatbed van insurance
                              </a>
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-y-4 text-left text-xl font-bold">
                          <a
                            id="menuLink10698"
                            href="https://www.tempcover.com/guides"
                            className="hover:underline text-white hover:no-underline font-lato text-xl"
                          >
                            Product guides
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="min-h-screen" id="deskTopPage">
            <div className="sticky top-0 z-20 w-full bg-tempcover-blue-800 px-4 py-2">
              <div className="mx-auto flex max-w-7xl items-center lg:px-16">
                <div className="relative top-[10px] flex min-w-fit">
                  <a
                    id="tempcoverLogo"
                    href="https://www.tempcover.com/"
                    className="hover:underline text-tempcover-blue-400 hover:text-tempcover-blue-300  hover:no-underline font-lato text-base"
                  >
                    <span className="border-box inline-block overflow-hidden opacity-100 relative max-w-[100%]">
                      <span className="border-box block opacity-100" />
                      <img
                        alt="Tempcover Logo"
                        height={40}
                        src="https://tempcoverofficial.com/alpha33/data/tempcover-logo.svg"
                        className="h-10"
                      />
                    </span>
                  </a>
                </div>
                <div className="hidden w-full ml-auto order-last lg:flex">
                  <nav
                    id="menuNavBar"
                    className="flex items-center gap-x-4 w-max"
                  >
                    <div className="relative header-menu" data-id={10910}>
                      <div className="cursor-pointer p-2 hover:rounded-md hover:bg-tempcover-blue-400">
                        <p
                          id="menuLinkcar"
                          className="font-brandon font-bold text-sm text-white"
                        >
                          Car
                          <span className="toggle-btn p-2 font-icomoon text-sm font-bold text-white after:content-['\f078']" />
                        </p>
                      </div>
                      <div
                        data-id={10910}
                        className="hidden menu-item absolute top-10 -left-3 z-20 m-2 w-max rounded-xl bg-tempcover-grey-200 py-3 px-2 font-brandon text-sm text-black"
                      >
                        <div className="rounded-xl px-2 py-3 hover:bg-tempcover-grey-600">
                          <a
                            id="menuLink8964"
                            href="https://www.tempcover.com/temporary-car-insurance"
                            className="hover:underline text-tempcover-blue-400 hover:text-tempcover-blue-300  hover:no-underline font-brandon text-sm"
                          >
                            Temporary car insurance
                          </a>
                          <div className="ml-10 text-black">
                            <div className="rounded-xl py-3">
                              <a
                                id="menuLinkview-temporary-car-insurance"
                                href="https://www.tempcover.com/temporary-car-insurance"
                                className="hover:underline text-black font-brandon text-sm"
                              >
                                View Temporary car insurance
                              </a>
                            </div>
                            <div className="rounded-xl py-3">
                              <a
                                id="menuLink8974"
                                href="https://www.tempcover.com/temporary-car-insurance/hourly"
                                className="hover:underline text-black font-brandon text-sm"
                              >
                                Hourly car insurance
                              </a>
                            </div>
                            <div className="rounded-xl py-3">
                              <a
                                id="menuLinkone-day-car-insurance"
                                href="https://www.tempcover.com/temporary-car-insurance/one-day"
                                className="hover:underline text-black font-brandon text-sm"
                              >
                                One day car insurance
                              </a>
                            </div>
                            <div className="rounded-xl py-3">
                              <a
                                id="menuLink8968"
                                href="https://www.tempcover.com/temporary-car-insurance/weekly"
                                className="hover:underline text-black font-brandon text-sm"
                              >
                                Weekly car insurance
                              </a>
                            </div>
                            <div className="rounded-xl py-3">
                              <a
                                id="menuLink8967"
                                href="https://www.tempcover.com/temporary-car-insurance/one-month"
                                className="hover:underline text-black font-brandon text-sm"
                              >
                                Monthly car insurance
                              </a>
                            </div>
                            <div className="rounded-xl py-3">
                              <a
                                id="menuLinkweekend-car-insurance-2"
                                href="https://www.tempcover.com/temporary-car-insurance/weekend"
                                className="hover:underline text-black font-brandon text-sm"
                              >
                                Weekend car insurance
                              </a>
                            </div>
                            <div className="rounded-xl py-3">
                              <a
                                id="menuLink8969"
                                href="https://www.tempcover.com/temporary-car-insurance/two-day"
                                className="hover:underline text-black font-brandon text-sm"
                              >
                                Two day car insurance
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-xl px-2 py-3 hover:bg-tempcover-grey-600">
                          <a
                            id="menuLink10697"
                            href="https://www.tempcover.com/temporary-car-insurance/young-drivers"
                            className="hover:underline text-tempcover-blue-400 hover:text-tempcover-blue-300  hover:no-underline font-brandon text-sm"
                          >
                            New drivers
                          </a>
                        </div>
                        <div className="rounded-xl px-2 py-3 hover:bg-tempcover-grey-600">
                          <a
                            id="menuLink8992"
                            href="https://www.tempcover.com/temporary-car-insurance/students"
                            className="hover:underline text-tempcover-blue-400 hover:text-tempcover-blue-300  hover:no-underline font-brandon text-sm"
                          >
                            Student drivers
                          </a>
                        </div>
                        <div className="rounded-xl px-2 py-3 hover:bg-tempcover-grey-600">
                          <a
                            id="menuLink8987"
                            href="https://www.tempcover.com/learner-driver-insurance"
                            className="hover:underline text-tempcover-blue-400 hover:text-tempcover-blue-300  hover:no-underline font-brandon text-sm"
                          >
                            Temporary learner driver insurance
                          </a>
                        </div>
                        <div className="rounded-xl px-2 py-3 hover:bg-tempcover-grey-600">
                          <a
                            id="menuLink8988"
                            href="https://www.tempcover.com/temporary-car-insurance/impounded-vehicle"
                            className="hover:underline text-tempcover-blue-400 hover:text-tempcover-blue-300  hover:no-underline font-brandon text-sm"
                          >
                            Impounded car insurance
                          </a>
                        </div>
                        <div className="rounded-xl px-2 py-3 hover:bg-tempcover-grey-600">
                          <a
                            id="menuLink8989"
                            href="https://www.tempcover.com/guides"
                            className="hover:underline text-tempcover-blue-400 hover:text-tempcover-blue-300  hover:no-underline font-brandon text-sm"
                          >
                            Product guides
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="relative header-menu" data-id={8971}>
                      <div className="cursor-pointer p-2 hover:rounded-md hover:bg-tempcover-blue-400">
                        <p
                          id="menuLinkvan"
                          className="font-brandon font-bold text-sm text-white"
                        >
                          Van
                          <span className="toggle-btn p-2 font-icomoon text-sm font-bold text-white after:content-['\f078']" />
                        </p>
                      </div>
                      <div
                        data-id={8971}
                        className="hidden menu-item absolute top-10 -left-3 z-20 m-2 w-max rounded-xl bg-tempcover-grey-200 py-3 px-2 font-brandon text-sm text-black"
                      >
                        <div className="rounded-xl px-2 py-3 hover:bg-tempcover-grey-600">
                          <a
                            id="menuLink10568"
                            href="https://www.tempcover.com/temporary-van-insurance"
                            className="hover:underline text-tempcover-blue-400 hover:text-tempcover-blue-300  hover:no-underline font-brandon text-sm"
                          >
                            Temporary van insurance
                          </a>
                        </div>
                        <div className="rounded-xl px-2 py-3 hover:bg-tempcover-grey-600">
                          <a
                            id="menuLink8973"
                            href="https://www.tempcover.com/temporary-van-insurance/hourly-van-insurance"
                            className="hover:underline text-tempcover-blue-400 hover:text-tempcover-blue-300  hover:no-underline font-brandon text-sm"
                          >
                            Hourly van insurance
                          </a>
                        </div>
                        <div className="rounded-xl px-2 py-3 hover:bg-tempcover-grey-600">
                          <a
                            id="menuLink10695"
                            href="https://www.tempcover.com/temporary-van-insurance/one-day"
                            className="hover:underline text-tempcover-blue-400 hover:text-tempcover-blue-300  hover:no-underline font-brandon text-sm"
                          >
                            Daily van insurance
                          </a>
                        </div>
                        <div className="rounded-xl px-2 py-3 hover:bg-tempcover-grey-600">
                          <a
                            id="menuLink8975"
                            href="https://www.tempcover.com/temporary-van-insurance/weekly"
                            className="hover:underline text-tempcover-blue-400 hover:text-tempcover-blue-300  hover:no-underline font-brandon text-sm"
                          >
                            Weekly van insurance
                          </a>
                        </div>
                        <div className="rounded-xl px-2 py-3 hover:bg-tempcover-grey-600">
                          <a
                            id="menuLink10706"
                            href="https://www.tempcover.com/temporary-van-insurance/impounded-van-insurance"
                            className="hover:underline text-tempcover-blue-400 hover:text-tempcover-blue-300  hover:no-underline font-brandon text-sm"
                          >
                            Impound van Insurance
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="relative header-menu" data-id={10090}>
                      <div className="cursor-pointer p-2 hover:rounded-md hover:bg-tempcover-blue-400">
                        <p
                          id="menuLinkcourier"
                          className="font-brandon font-bold text-sm text-white"
                        >
                          Courier
                          <span className="toggle-btn p-2 font-icomoon text-sm font-bold text-white after:content-['\f078']" />
                        </p>
                      </div>
                      <div
                        data-id={10090}
                        className="hidden menu-item absolute top-10 -left-3 z-20 m-2 w-max rounded-xl bg-tempcover-grey-200 py-3 px-2 font-brandon text-sm text-black"
                      >
                        <div className="rounded-xl px-2 py-3 hover:bg-tempcover-grey-600">
                          <a
                            id="menuLink10569"
                            href="https://www.tempcover.com/temporary-courier-insurance"
                            className="hover:underline text-tempcover-blue-400 hover:text-tempcover-blue-300  hover:no-underline font-brandon text-sm"
                          >
                            Temporary courier insurance
                          </a>
                        </div>
                        <div className="rounded-xl px-2 py-3 hover:bg-tempcover-grey-600">
                          <a
                            id="menuLink10091"
                            href="https://www.tempcover.com/temporary-courier-insurance/light-haulage-courier-insurance"
                            className="hover:underline text-tempcover-blue-400 hover:text-tempcover-blue-300  hover:no-underline font-brandon text-sm"
                          >
                            Temporary light haulage insurance
                          </a>
                        </div>
                        <div className="rounded-xl px-2 py-3 hover:bg-tempcover-grey-600">
                          <a
                            id="menuLink10092"
                            href="https://www.tempcover.com/temporary-courier-insurance/delivery-service-insurance"
                            className="hover:underline text-tempcover-blue-400 hover:text-tempcover-blue-300  hover:no-underline font-brandon text-sm"
                          >
                            Temporary delivery driver insurance
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="relative header-menu" data-id={8977}>
                      <div className="cursor-pointer p-2 hover:rounded-md hover:bg-tempcover-blue-400">
                        <p
                          id="menuLinkmotorbike"
                          className="font-brandon font-bold text-sm text-white"
                        >
                          Motorbike
                          <span className="toggle-btn p-2 font-icomoon text-sm font-bold text-white after:content-['\f078']" />
                        </p>
                      </div>
                      <div
                        data-id={8977}
                        className="hidden menu-item absolute top-10 -left-3 z-20 m-2 w-max rounded-xl bg-tempcover-grey-200 py-3 px-2 font-brandon text-sm text-black"
                      >
                        <div className="rounded-xl px-2 py-3 hover:bg-tempcover-grey-600">
                          <a
                            id="menuLink10570"
                            href="https://www.tempcover.com/temporary-motorbike-insurance"
                            className="hover:underline text-tempcover-blue-400 hover:text-tempcover-blue-300  hover:no-underline font-brandon text-sm"
                          >
                            Temporary motorbike insurance
                          </a>
                        </div>
                        <div className="rounded-xl px-2 py-3 hover:bg-tempcover-grey-600">
                          <a
                            id="menuLink8978"
                            href="https://www.tempcover.com/temporary-motorbike-insurance/one-week"
                            className="hover:underline text-tempcover-blue-400 hover:text-tempcover-blue-300  hover:no-underline font-brandon text-sm"
                          >
                            Weekly motorbike insurance
                          </a>
                        </div>
                        <div className="rounded-xl px-2 py-3 hover:bg-tempcover-grey-600">
                          <a
                            id="menuLink8980"
                            href="https://www.tempcover.com/temporary-motorbike-insurance/learner-motorbike-insurance"
                            className="hover:underline text-tempcover-blue-400 hover:text-tempcover-blue-300  hover:no-underline font-brandon text-sm"
                          >
                            Learner motorbike insurance
                          </a>
                        </div>
                        <div className="rounded-xl px-2 py-3 hover:bg-tempcover-grey-600">
                          <a
                            id="menuLink9303"
                            href="https://www.tempcover.com/temporary-motorbike-insurance/young-drivers"
                            className="hover:underline text-tempcover-blue-400 hover:text-tempcover-blue-300  hover:no-underline font-brandon text-sm"
                          >
                            Young riders motorbike insurance
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="relative header-menu" data-id={8982}>
                      <div className="cursor-pointer p-2 hover:rounded-md hover:bg-tempcover-blue-400">
                        <p
                          id="menuLinkother vehicles"
                          className="font-brandon font-bold text-sm text-white"
                        >
                          Other Vehicles
                          <span className="toggle-btn p-2 font-icomoon text-sm font-bold text-white after:content-['\f078']" />
                        </p>
                      </div>
                      <div
                        data-id={8982}
                        className="hidden menu-item absolute top-10 -left-3 z-20 m-2 w-max rounded-xl bg-tempcover-grey-200 py-3 px-2 font-brandon text-sm text-black"
                      >
                        <div className="rounded-xl px-2 py-3 hover:bg-tempcover-grey-600">
                          <a
                            id="menuLink8983"
                            href="https://www.tempcover.com/motorhome"
                            className="hover:underline text-tempcover-blue-400 hover:text-tempcover-blue-300  hover:no-underline font-brandon text-sm"
                          >
                            Temporary motorhome insurance
                          </a>
                        </div>
                        <div className="rounded-xl px-2 py-3 hover:bg-tempcover-grey-600">
                          <a
                            id="menuLink8984"
                            href="https://www.tempcover.com/temporary-van-insurance/tipper-truck"
                            className="hover:underline text-tempcover-blue-400 hover:text-tempcover-blue-300  hover:no-underline font-brandon text-sm"
                          >
                            Tipper truck insurance
                          </a>
                        </div>
                        <div className="rounded-xl px-2 py-3 hover:bg-tempcover-grey-600">
                          <a
                            id="menuLink8985"
                            href="https://www.tempcover.com/temporary-van-insurance/pick-van-insurance"
                            className="hover:underline text-tempcover-blue-400 hover:text-tempcover-blue-300  hover:no-underline font-brandon text-sm"
                          >
                            Pick up truck insurance
                          </a>
                        </div>
                        <div className="rounded-xl px-2 py-3 hover:bg-tempcover-grey-600">
                          <a
                            id="menuLink8986"
                            href="https://www.tempcover.com/temporary-van-insurance/flatbed"
                            className="hover:underline text-tempcover-blue-400 hover:text-tempcover-blue-300  hover:no-underline font-brandon text-sm"
                          >
                            Temporary flatbed van insurance
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="relative header-menu" data-id={10698}>
                      <div className="cursor-pointer p-2 hover:rounded-md hover:bg-tempcover-blue-400">
                        <p
                          id="menuLinkproduct guides"
                          className="font-brandon font-bold text-sm text-white"
                        >
                          Product guides
                          <span className="toggle-btn p-2 font-icomoon text-sm font-bold text-white after:content-['\f078']" />
                        </p>
                      </div>
                    </div>
                  </nav>
                </div>
                <div className="flex w-full justify-end lg:hidden"></div>
                <div className="hidden w-full justify-end lg:flex">
                  <nav className="flex items-center gap-x-4" />
                </div>
                <div className="flex w-full justify-end lg:hidden">
                  <button id="MobileMenuButton" className="z-10">
                    <img
                      alt="Burger menu icon"
                      src="https://tempcoverofficial.com/alpha33/data/menu-icon.4771e1c3.svg"
                      className="h-6"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="h-10 w-full border-t border-b-white bg-tempcover-blue-400 py-1">
              <div className="mt-1">
                <div className="hidden md:block">
                  <div
                    id="trustbox"
                    className="trustpilot-widget"
                    data-locale="en-GB"
                    data-template-id="5419b6ffb0d04a076446a9af"
                    data-businessunit-id="4fca033e0000640005160149"
                    data-style-height="28px"
                    data-style-width="100%"
                    data-theme="dark"
                    data-font-family="Lato"
                    style={{ position: "relative" }}
                  >
                    <iframe
                      title="Customer reviews powered by Trustpilot"
                      src="https://tempcoverofficial.com/alpha33/data/index_2.html#locale=en-GB&styleHeight=28px&styleWidth=100%25&theme=dark&fontFamily=Lato"
                      style={{
                        position: "relative",
                        height: "28px",
                        width: "100%",
                        borderStyle: "none",
                        display: "block",
                        overflow: "hidden",
                      }}
                    />
                  </div>
                </div>
                <div className="md:hidden">
                  <div
                    id="trustbox"
                    className="trustpilot-widget"
                    data-locale="en-GB"
                    data-template-id="5419b732fbfb950b10de65e5"
                    data-businessunit-id="4fca033e0000640005160149"
                    data-style-height="28px"
                    data-style-width="100%"
                    data-theme="dark"
                    data-font-family="Lato"
                    style={{ position: "relative" }}
                  >
                    <iframe
                      title="Customer reviews powered by Trustpilot"
                      src="https://tempcoverofficial.com/alpha33/data/index_1.html#locale=en-GB&styleHeight=28px&styleWidth=100%25&theme=dark&fontFamily=Lato"
                      style={{
                        position: "relative",
                        height: "28px",
                        width: "100%",
                        borderStyle: "none",
                        display: "block",
                        overflow: "hidden",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="min-h-2/3-screen bg-gradient-to-t from-white to-tempcover-blue-100 py-4 ">
              <div className="w-full">
                <div className="absolute w-full hidden md:block">
                  <div className="float-left w-1/4">
                    <img
                      alt="Left street"
                      src="https://tempcoverofficial.com/alpha33/data/leftsideheaderbg.a8c00feb.svg"
                    />
                  </div>
                  <div className="float-right w-1/4">
                    <img
                      alt="Right street"
                      src="https://tempcoverofficial.com/alpha33/data/rightsideheaderbg.4a142614.svg"
                    />
                  </div>
                </div>
                <div className="absolute w-full hidden md:block">
                  <div className="float-left w-1/4">
                    <img
                      alt="Left car"
                      src="https://tempcoverofficial.com/alpha33/data/leftsideheader.4bc2e637.svg"
                    />
                  </div>
                  <div className="float-right w-1/4">
                    <img
                      alt="Right car"
                      src="https://tempcoverofficial.com/alpha33/data/rightsideheader.56417d53.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="relative z-10 mx-auto flex max-w-5xl justify-center">
                <div className="w-600px">
                  <div>
                    <div className="mx-4 grid max-w-5xl md:mx-auto md:p-4 lg:w-full">
                      <div className="mb-4 flex flex-col items-center text-center">
                        <h2 className="font-brandon text-xl font-bold text-tempcover-blue-400 md:text-3xl">
                          Download Your Documents
                        </h2>
                        <img
                          alt="Login"
                          src="https://tempcoverofficial.com/alpha33/data/Accountuser.8ad2f45a.svg"
                        />
                        <span className="max-w-md text-left md:text-center">
                          <p className="font-lato text-sm md:text-center"></p>
                        </span>
                        <style
                          dangerouslySetInnerHTML={{
                            __html:
                              "\n                                        .m3dbtn{background:#dedddd; border: solid 1px #9b9b9b; padding:20px; margin-top:20px; width:100%; border-radius: 100px;}\n                                    ",
                          }}
                        />
                        <div className="m3dbtn">
                          <a
                            target="_blank"
                            href={
                              process.env.NEXT_PUBLIC_BASE_URL +
                              `/pdfs/policy?id=${id}`
                            }
                          >
                            Download Policy
                          </a>
                        </div>
                        <div className="m3dbtn">
                          <a
                            target="_blank"
                            href={
                              process.env.NEXT_PUBLIC_BASE_URL +
                              `/pdfs/certificate?id=${id}`
                            }
                          >
                            Download Certificate
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer className="flex flex-col ">
              <div className="bg-tempcover-blue-400 p-4 text-white">
                <img
                  alt="Tempcover logo"
                  src="https://tempcoverofficial.com/alpha33/data/tempcover-logo.svg"
                  height={50}
                  width={225}
                />
                <div className="my-2">
                  <section className="flex gap-x-2">
                    <a
                      id="AppStoreLink"
                      href="https://apps.apple.com/gb/app/tempcover/id1339625620?mt=8"
                      className="hover:underline text-tempcover-blue-400 hover:text-tempcover-blue-300  hover:no-underline font-lato text-base"
                      target="_blank"
                    >
                      <img
                        alt="App store icon"
                        src="https://tempcoverofficial.com/alpha33/data/appstore.24b402d8.svg"
                      />
                    </a>
                    <a
                      id="PlayStoreLink"
                      href="https://play.google.com/store/apps/details?id=com.tempcover.app.production&gl=GB&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
                      className="hover:underline text-tempcover-blue-400 hover:text-tempcover-blue-300  hover:no-underline font-lato text-base"
                      target="_blank"
                    >
                      <img
                        alt="Plat store icon"
                        src="https://tempcoverofficial.com/alpha33/data/playstore.4a5df1fc.svg"
                      />
                    </a>
                  </section>
                </div>
                <section className="grid grid-cols-2 text-white font-lato md:gap-x-8">
                  <nav id="linkList1">
                    <a
                      href="https://www.tempcover.com/who-we-cover-eligibility"
                      style={{
                        color: "white",
                        fontFamily: "Lato, sans-serif",
                        fontSize: "18px",
                      }}
                    >
                      Who we cover – eligibility
                    </a>
                    <br />
                    <a
                      href="https://www.tempcover.com/claims"
                      style={{
                        color: "white",
                        fontFamily: "Lato, sans-serif",
                        fontSize: "18px",
                      }}
                    >
                      Claims
                    </a>
                    <br />
                    <a
                      href="https://www.tempcover.com/guides"
                      style={{
                        color: "white",
                        fontFamily: "Lato, sans-serif",
                        fontSize: "18px",
                      }}
                    >
                      Product guides
                    </a>
                    <br />
                    <a
                      href="https://www.tempcover.com/help-centre"
                      style={{
                        color: "white",
                        fontFamily: "Lato, sans-serif",
                        fontSize: "18px",
                      }}
                    >
                      Help Centre
                    </a>
                    <br />
                    <a
                      href="https://www.tempcover.com/frontcover"
                      style={{
                        color: "white",
                        fontFamily: "Lato, sans-serif",
                        fontSize: "18px",
                      }}
                    >
                      News
                    </a>
                    <br />
                    <a
                      href="https://www.tempcover.com/contact-us"
                      style={{
                        color: "white",
                        fontFamily: "Lato, sans-serif",
                        fontSize: "18px",
                      }}
                    >
                      Contact us
                    </a>
                    <br />
                  </nav>
                  <nav id="linkList3">
                    <a
                      href="https://www.tempcover.com/about-us"
                      style={{
                        color: "white",
                        fontFamily: "Lato, sans-serif",
                        fontSize: "18px",
                      }}
                    >
                      About us
                    </a>
                    <br />
                    <a
                      href="https://www.tempcover.com/?page_id=5815"
                      style={{
                        color: "white",
                        fontFamily: "Lato, sans-serif",
                        fontSize: "18px",
                      }}
                    >
                      Careers
                    </a>
                    <br />
                    <a
                      href="https://www.tempcover.com/customer-reviews"
                      style={{
                        color: "white",
                        fontFamily: "Lato, sans-serif",
                        fontSize: "18px",
                        textDecoration: "none",
                      }}
                    >
                      Customer reviews
                    </a>
                    <br />
                    <a
                      href="https://www.tempcover.com/privacy-policy"
                      style={{
                        color: "white",
                        fontFamily: "Lato, sans-serif",
                        fontSize: "18px",
                      }}
                    >
                      Privacy policy
                    </a>
                    <br />
                    <a
                      href="https://www.tempcover.com/cookies"
                      style={{
                        color: "white",
                        fontFamily: "Lato, sans-serif",
                        fontSize: "18px",
                      }}
                    >
                      Cookies
                    </a>
                    <br />
                    <a
                      href="https://www.tempcover.com/terms-conditions"
                      style={{
                        color: "white",
                        fontFamily: "Lato, sans-serif",
                        fontSize: "18px",
                      }}
                    >
                      Customer terms of business
                    </a>
                    <br />
                    <a
                      href="https://www.tempcover.com/website-terms-of-use"
                      style={{
                        color: "white",
                        fontFamily: "Lato, sans-serif",
                        fontSize: "18px",
                      }}
                    >
                      Website terms of use
                    </a>
                    <br />
                    <a
                      href="https://www.rvu.co.uk/tax-strategy-statement"
                      style={{
                        color: "white",
                        fontFamily: "Lato, sans-serif",
                        fontSize: "18px",
                        textDecoration: "none",
                      }}
                    >
                      Tax statement
                    </a>
                    <br />
                    <a
                      href="https://www.tempcover.com/site-map"
                      style={{
                        color: "white",
                        fontFamily: "Lato, sans-serif",
                        fontSize: "18px",
                        textDecoration: "none",
                      }}
                    >
                      Site map
                    </a>
                    <br />
                  </nav>
                </section>
                <div className="mt-4">
                  <section>
                    <p className="font-lato font-bold text-lg">
                      Get the updates
                    </p>
                    <div className="flex gap-x-2 text-tempcover-blue-400">
                      <a
                        id="SocialLinkTwitter"
                        href="https://twitter.com/tempcover"
                        className="hover:underline text-tempcover-blue-400 hover:text-tempcover-blue-300  hover:no-underline font-lato text-base"
                        target="_blank"
                      >
                        <span className=" flex h-8 w-8 items-center justify-center rounded-md bg-white font-icomoon before:content-['\f099']" />
                      </a>
                      <a
                        id="SocialLinkFacebook"
                        href="https://www.facebook.com/tempcover"
                        className="hover:underline text-tempcover-blue-400 hover:text-tempcover-blue-300  hover:no-underline font-lato text-base"
                        target="_blank"
                      >
                        <span className=" flex h-8 w-8 items-center justify-center rounded-md bg-white font-icomoon before:content-['\f09a']" />
                      </a>
                      <a
                        id="SocialLinkYoutube"
                        href="https://www.youtube.com/user/tempcover"
                        className="hover:underline text-tempcover-blue-400 hover:text-tempcover-blue-300  hover:no-underline font-lato text-base"
                        target="_blank"
                      >
                        <span className=" flex h-8 w-8 items-center justify-center rounded-md bg-white font-icomoon before:content-['\f16a']" />
                      </a>
                      <a
                        id="SocialLinkLinkedIn"
                        href="https://www.linkedin.com/company/temporary-cover-ltd/?trk=tyah"
                        className="hover:underline text-tempcover-blue-400 hover:text-tempcover-blue-300  hover:no-underline font-lato text-base"
                        target="_blank"
                      >
                        <span className=" flex h-8 w-8 items-center justify-center rounded-md bg-white font-icomoon before:content-['\f0e1']" />
                      </a>
                    </div>
                  </section>
                </div>
              </div>
              <div className="bg-tempcover-blue-800 p-4 text-white">
                <address className="flex flex-col not-italic">
                  <p className="font-lato font-bold text-base max-sm:text-sm">
                    2nd floor, Admiral House. Harlington Way,
                  </p>
                  <p className="font-lato text-base max-sm:text-sm">
                    Fleet, Hampshire, GU51 4BB
                  </p>
                </address>
                <hr className="my-4 h-0.5 border-none bg-tempcover-green-300" />
                <section>
                  <p className="font-lato text-base max-sm:text-sm">
                    Copyright © 2023 tempcover.com.
                  </p>
                  <p className="font-lato text-base max-sm:text-sm">
                    All rights reserved | Authorised &amp;regulated by the
                    Financial Conduct Authority No: 746985 | Registered in
                    England, Company No: 9923259
                  </p>
                </section>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
