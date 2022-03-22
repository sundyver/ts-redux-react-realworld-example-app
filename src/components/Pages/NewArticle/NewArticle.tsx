import { FormEvent, useEffect } from 'react';
import { createArticle, getArticles } from '../../../services/conduit';
import { store } from '../../../state/store';
import { ArticleEditor } from '../../ArticleEditor/ArticleEditor';
import { initializeEditor, startSubmitting, updateErrors } from '../../ArticleEditor/ArticleEditor.slice';

export function NewArticle() {
  useEffect(() => {
    store.dispatch(initializeEditor());
  }, [null]);

  return <ArticleEditor onSubmit={onSubmit} />;
}

async function onSubmit(ev: FormEvent) {
  ev.preventDefault();
  store.dispatch(startSubmitting());

  const myArticle = store.getState().editor.article;

  try {
    await createArticle(myArticle);
  } catch (error) {
    // do nothing
  }

  const { articles } = await getArticles();

  let slug;
  for (let i = 0; i < articles.length; i += 1) {
    const article = articles[i];
    if (article.title === myArticle.title) {
      slug = article.slug;
    }
  }

  if (slug) {
    location.hash = `#/article/${slug}`;
  } else {
    location.hash = '#';
  }
}
