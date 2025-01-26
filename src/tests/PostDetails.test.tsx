/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import React from 'react';
import { render, screen, waitFor } from 'src/tests/';
import PostDetails from 'src/pages/PostDetails';
import { usePostDetails } from '../hooks/usePostDetails';
import '@testing-library/jest-dom';
import { UsePostDetailsReturn } from 'src/types/post-details.type';
import { Post } from 'src/types/posts.type';

jest.mock('../hooks/usePostDetails');

describe('PostDetails Component', () => {
  it('should render post details correctly', async () => {
    const mockPostData: Post = {
      title: 'Mock Post Title',
      content: 'Mock post content',
      updatedAt: '2025-01-01T00:00:00Z',
      author: {
        name: 'John Doe',
        profilePicture: 'https://example.com/profile.jpg',
      },
      thumbnail_url: 'https://example.com/thumbnail.jpg',
    } as unknown as Post;
    
    const mockState: UsePostDetailsReturn["state"] = {
      post: mockPostData,
      loading: false,
      latestPosts: [],
      labelLatestArticles: 'Latest Articles',
      labelBack: 'Back',
      writtenByLabel: 'Written By',
    };

    (usePostDetails as jest.Mock).mockReturnValue({
      state: mockState,
      controller: {},
    });

    render(<PostDetails />);

    await waitFor(() => {
      expect(screen.getByText(mockPostData.title)).toBeInTheDocument();
      expect(screen.getByText(mockPostData.content)).toBeInTheDocument();
      expect(screen.getByText(mockPostData.author.name)).toBeInTheDocument();
      expect(screen.getByText(mockState.labelLatestArticles)).toBeInTheDocument();
      expect(screen.getByText(mockState.writtenByLabel)).toBeInTheDocument();
    })
  });

  it('should render empty div if no post is available', async () => {
    const mockState: UsePostDetailsReturn["state"] = {
      post: undefined,
      loading: false,
      latestPosts: [],
      labelLatestArticles: 'Latest Articles',
      labelBack: 'Back',
      writtenByLabel: 'Written By',
    };

    (usePostDetails as jest.Mock).mockReturnValue({
      state: mockState,
      controller: {},
    });

    render(<PostDetails />);

    await waitFor(() => {
      expect(screen.queryByText('Latest Articles')).toBeNull();
    });
  });
});
