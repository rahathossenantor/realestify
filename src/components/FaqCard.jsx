import QuestionMark from "../assets/images/faq/QuestionMark";

const FaqCard = () => {
    return (
        <div className="mb-12 flex lg:mb-[70px]">
            <QuestionMark />
            <div className="w-full">
                <h3 className="mb-6 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Is TailGrids Well-documented?
                </h3>
                <p className="text-base text-body-color dark:text-dark-6">
                    It takes 2-3 weeks to get your first blog post ready. That
                    includes the in-depth research &amp; creation of your monthly
                    content ui/ux strategy that we do writing your first blog post.
                </p>
            </div>
        </div>
    );
};

export default FaqCard;
