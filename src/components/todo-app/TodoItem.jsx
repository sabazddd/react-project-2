import { useState } from "react"

export default function TodoItem({ id, title, onDelete, onEdit }) {
    const [isEditing, setIsEditing] = useState(false)
    const [editValue, setEditValue] = useState(title)

    function handleSave() {
        if (editValue.trim() === "") return
        onEdit(id, editValue)
        setIsEditing(false)
    }

    return (
        <li>
            {isEditing ? (
                <>
                    <input
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                    />
                    <button onClick={handleSave}>Save</button>
                </>
            ) : (
                <>
                    {title}
                    <button onClick={() => setIsEditing(true)}>
                        Edit
                    </button>
                </>
            )}

            <button onClick={() => onDelete(id)}>Delete</button>
        </li>
    )
}
