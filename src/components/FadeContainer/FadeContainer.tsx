import React from "react";
import { gsap } from "src/config/gsap";

interface Props {
  children: React.ReactNode;
  id?: string;
  navbarRef?: React.MutableRefObject<HTMLUListElement | null>;
  showNavbar?: boolean;
}

const FadeContainer: React.FC<Props> = (props) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const renderChildren = () => {
    return React.Children.map(props.children, (child) => {
      // @ts-ignore
      return React.cloneElement(child, {
        parentRef: containerRef,
      });
    });
  };
  React.useEffect(() => {
    if (containerRef.current) {
      // Gsap fadein animation
      gsap.to(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=100%",
          scrub: true,
          pin: true,
          // anticipatePin: 1,
        },
      });

      gsap.to(props.navbarRef.current, {
        // opacity: props.showNavbar ? 1 : 0,
        // duration: 0.3,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=100%",
          markers: false,
          toggleActions: "play reverse",
          scrub: true,
          onToggle: (self) => {
            gsap.to(props.navbarRef.current, {
              opacity: self.isActive ? (props.showNavbar ? 1 : 0) : props.showNavbar ? 1 : 0, 
            });
          },
        },
      });

      // const tl1 = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: containerRef.current,
      //     // start: "top 80%",
      //     // scrub: true,
      //     // end: "bottom bottom",
      //     markers: true,
      //     pin: true,
      //     start: "top top",
      //     end: "+=100%",
      //     // snap: 1,
      //     toggleActions: "play none none reverse",
      //   },
      //   // duration: 1,
      // });
      // tl1.fromTo(
      //   containerRef.current,
      //   {
      //     // opacity: 0,
      //     pointerEvents: "none",
      //   },
      //   {
      //     // opacity: 1,
      //     pointerEvents: "all",
      //     // duration: 1,
      //   }
      // );
    }
  }, [containerRef]);

  return (
    <div ref={containerRef} id={props.id} style={{ overflowX: "hidden" }} className="panel">
      {renderChildren()}
    </div>
  );
};

export default FadeContainer;
