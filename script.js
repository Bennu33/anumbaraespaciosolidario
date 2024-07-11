document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

    gsap.from("#introduction", {duration: 1, y: -50, opacity: 0});
    
    const stages = document.querySelectorAll(".stage");

    stages.forEach((stage, index) => {
        gsap.from(stage, {
            scrollTrigger: {
                trigger: stage,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            duration: 1,
            y: 50,
            opacity: 0,
            delay: index * 0.3
        });
    });

    // Animations for each stage
    gsap.to("#donation .book", {
        scrollTrigger: {
            trigger: "#donation",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        duration: 3,
        motionPath: {
            path: "#path-donation",
            align: "#path-donation",
            alignOrigin: [0.5, 0.5]
        }
    });

    gsap.to("#transport .truck", {
        scrollTrigger: {
            trigger: "#transport",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        duration: 3,
        motionPath: {
            path: "#path-transport",
            align: "#path-transport",
            alignOrigin: [0.5, 0.5]
        }
    });

    gsap.to("#sale .market", {
        scrollTrigger: {
            trigger: "#sale",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        duration: 3,
        motionPath: {
            path: "#path-sale",
            align: "#path-sale",
            alignOrigin: [0.5, 0.5]
        }
    });

    gsap.to("#impact .project", {
        scrollTrigger: {
            trigger: "#impact",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        duration: 3,
        motionPath: {
            path: "#path-impact",
            align: "#path-impact",
            alignOrigin: [0.5, 0.5]
        }
    });
});
