package org.acme.contactify;

import java.util.ArrayList;
import java.util.List;

import jakarta.json.bind.annotation.JsonbProperty;
import org.eclipse.microprofile.openapi.annotations.media.Schema;

public class MultipleResults<E> {
    @Schema(name = "numberFound")
    protected long numberFound;
    protected int start;
    @JsonbProperty(value = "docs")
    protected List<E> documents = new ArrayList<E>();

    public MultipleResults() {
    }

    public MultipleResults(List<E> documents, int start, int numberFound) {
        this.documents = documents;
        this.start = start;
        this.numberFound = numberFound;
    }

    public long getNumberFound() {
        return numberFound;
    }

    @JsonbProperty(value = "numFound")
    public void setNumberFound(long numberFound) {
        this.numberFound = numberFound;
    }

    public int getStart() {
        return start;
    }

    public void setStart(int start) {
        this.start = start;
    }

    public List<E> getDocuments() {
        return documents;
    }

    public void setDocuments(List<E> documents) {
        this.documents = documents;
    }

    public void addDocument(E document) {
        if (documents == null) {
            documents = new ArrayList<E>();
        }
        documents.add(document);
    }

    @Override
    public String toString() {
        return "[numberFound=" + numberFound + " and start " + start + " and list length " + (documents != null
                ? documents.size()
                : "0") + " ]";
    }
}