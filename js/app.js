function addPostToPage(post) {
    let html = `<div class="entry" data-post-id="${post.id}">
                        <div class="entry-header d-flex justify-content-between">
                            <span class="entry-date">${convertUnixStampToScreenDate(post.date, true)}</span>
                            <div class="entry-controls">
                                <button data-toggle="modal" data-target="#post-dialog" data-mode="1">Edit</button>
                                <button data-toggle="modal" data-target="#remove-modal">Delete</button>
                            </div>
                        </div>
                        <div class="entry-body">${post.text}</div>
                    </div>`;

    $('.post-container').append(html);
}

