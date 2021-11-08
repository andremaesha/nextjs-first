import React, { Fragment } from "react";
import Head from "next/head";

import { getAllPostIds, getPostData } from "../../lib/posts";
import Layout from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";

import Date from "../../components/date";

const Post = ({ postData }) => {
    return (
        <Fragment>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <Layout>
                <article>
                    <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                    <div className={utilStyles.lightText}>
                        <Date dateString={postData.date} />
                    </div>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: postData.contentHtml,
                        }}
                    />
                </article>
            </Layout>
        </Fragment>
    );
};

export const getStaticPaths = async () => {
    const paths = getAllPostIds();

    return {
        paths,
        fallback: true,
    };
};

export const getStaticProps = async ({ params }) => {
    const postData = await getPostData(params.id);

    return {
        props: {
            postData,
        },
    };
};

export default Post;
