import React from 'react';

interface Index {
}

const Index: React.FC<Index> = (): React.ReactElement => {
    return (
        <>
            <div className="center">
                <h1>Welcome!</h1>
                <h2>Here you can find the best tracks</h2>
            </div>

            <style jsx>
                {`
                  .center {
                    margin-top: 150px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                  }
                `}
            </style>
        </>
    );
};

export default Index