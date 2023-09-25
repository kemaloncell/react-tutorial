import React from "react";
import ErrorHandlingHero from "./ErrorHandlingHero";
import ErrorBoundary from "./ErrorBoundary";

class Parent extends React.Component {
    render() {
        return (
            <div>
                {/* you can use two-way to use errorBoundry first one is wraps all of them and when error came it will be written message
                <ErrorBoundary>
                <ErrorHandlingHero heroName="Batman"></ErrorHandlingHero>
                <ErrorHandlingHero heroName="joker"></ErrorHandlingHero>
                </ErrorBoundary>
                */}
                {/*when error appears one of both, it will be throw error and other will continue to work*/}
                <ErrorBoundary>
                    <ErrorHandlingHero heroName="Batman"></ErrorHandlingHero>
                </ErrorBoundary>
                <ErrorBoundary>
                    <ErrorHandlingHero heroName="joker"></ErrorHandlingHero>
                </ErrorBoundary>


            </div>
        );
    }
}

export default Parent;
